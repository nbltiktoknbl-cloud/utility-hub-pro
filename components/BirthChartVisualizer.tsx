import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { AgeResult } from '../utils/calculateAge';
import { TranslationSet } from '../utils/translations';
import { Info, Star, Moon, Sun, Globe, Heart, Zap, Compass } from 'lucide-react';

interface BirthChartVisualizerProps {
  result: AgeResult;
  t: TranslationSet;
  darkMode: boolean;
}

const BirthChartVisualizer: React.FC<BirthChartVisualizerProps> = ({ result, t, darkMode }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<any>(null);

  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ];

  const planetData = [
    { name: 'sun', label: t.sunSignLabel, sign: result.birthChart.sunSign, degree: result.birthChart.sunDegree, color: '#f97316', icon: Sun },
    { name: 'moon', label: t.moonSignLabel, sign: result.birthChart.moonSign, degree: result.birthChart.moonDegree, color: '#6366f1', icon: Moon },
    { name: 'mercury', label: t.mercuryLabel, sign: result.planetaryPositions.mercury, degree: result.planetaryPositions.mercuryDegree, color: '#facc15', icon: Globe },
    { name: 'venus', label: t.venusLabel, sign: result.planetaryPositions.venus, degree: result.planetaryPositions.venusDegree, color: '#f472b6', icon: Heart },
    { name: 'mars', label: t.marsLabel, sign: result.planetaryPositions.mars, degree: result.planetaryPositions.marsDegree, color: '#f87171', icon: Zap },
    { name: 'rising', label: t.risingSignLabel, sign: result.birthChart.risingSign, degree: 0, color: '#10b981', icon: Compass },
  ];

  // Aspect data for Recharts
  const aspectCounts = result.aspects.reduce((acc, aspect) => {
    acc[aspect.type] = (acc[aspect.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const radarData = Object.keys(t.aspectTypes).map(type => ({
    subject: t.aspectTypes[type],
    A: aspectCounts[type] || 0,
    fullMark: Math.max(...Object.values(aspectCounts), 3),
  }));

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 40;
    const innerRadius = radius - 40;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const risingSignIndex = signs.indexOf(result.birthChart.risingSign);
    const rotationOffset = -risingSignIndex * 30 - 180;

    const getAngle = (sign: string, degree: number) => {
      const signIndex = signs.indexOf(sign);
      return (signIndex * 30 + degree + rotationOffset) * (Math.PI / 180);
    };

    // Draw Zodiac Wheel Arcs
    const pie = d3.pie<number>().value(() => 1).sort(null);
    const arc = d3.arc<d3.PieArcDatum<number>>()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    const zodiacG = g.append("g").attr("class", "zodiac-wheel");

    const signArcs = zodiacG.selectAll(".sign-arc")
      .data(pie(new Array(12).fill(30)))
      .enter()
      .append("g")
      .attr("class", "sign-arc")
      .attr("transform", `rotate(${rotationOffset})`);

    signArcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => darkMode ? (i % 2 === 0 ? "#1e293b" : "#0f172a") : (i % 2 === 0 ? "#f8fafc" : "#f1f5f9"))
      .attr("stroke", darkMode ? "#334155" : "#e2e8f0")
      .attr("stroke-width", 1);

    signArcs.append("text")
      .attr("transform", d => {
        const centroid = arc.centroid(d);
        return `translate(${centroid[0]}, ${centroid[1]}) rotate(${((d.startAngle + d.endAngle) / 2) * (180 / Math.PI)})`;
      })
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", darkMode ? "#94a3b8" : "#64748b")
      .text((_, i) => t.zodiacSigns[signs[i]].substring(0, 3).toUpperCase());

    // Draw House Lines
    const houseLinesG = g.append("g").attr("class", "house-lines");
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 + rotationOffset) * (Math.PI / 180);
      houseLinesG.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", innerRadius * Math.cos(angle))
        .attr("y2", innerRadius * Math.sin(angle))
        .attr("stroke", darkMode ? "#334155" : "#cbd5e1")
        .attr("stroke-width", i === 0 ? 2 : 0.5)
        .attr("stroke-dasharray", i === 0 ? "none" : "2,2")
        .attr("opacity", 0.5);
    }

    // Draw Aspects
    const aspectsG = g.append("g").attr("class", "aspects");
    result.aspects.forEach(aspect => {
      const p1 = planetData.find(p => p.name === aspect.planet1);
      const p2 = planetData.find(p => p.name === aspect.planet2);
      if (p1 && p2) {
        const a1 = getAngle(p1.sign, p1.degree);
        const a2 = getAngle(p2.sign, p2.degree);
        
        let color = "#94a3b8";
        if (aspect.type === 'conjunction') color = '#3b82f6';
        else if (aspect.type === 'opposition') color = '#ef4444';
        else if (aspect.type === 'trine') color = '#10b981';
        else if (aspect.type === 'square') color = '#f59e0b';

        aspectsG.append("line")
          .attr("x1", (innerRadius - 30) * Math.cos(a1))
          .attr("y1", (innerRadius - 30) * Math.sin(a1))
          .attr("x2", (innerRadius - 30) * Math.cos(a2))
          .attr("y2", (innerRadius - 30) * Math.sin(a2))
          .attr("stroke", color)
          .attr("stroke-width", 1.5)
          .attr("opacity", 0.3)
          .attr("stroke-dasharray", aspect.type === 'sextile' ? "4,2" : "none")
          .attr("class", "aspect-line transition-all duration-300 hover:opacity-100 hover:stroke-width-2");
      }
    });

    // Draw Planets
    const planetsG = g.append("g").attr("class", "planets");
    planetData.forEach(planet => {
      const angle = getAngle(planet.sign, planet.degree);
      const x = (innerRadius - 15) * Math.cos(angle);
      const y = (innerRadius - 15) * Math.sin(angle);

      const planetGroup = planetsG.append("g")
        .attr("class", "planet-marker group")
        .attr("cursor", "pointer")
        .on("mouseenter", () => setHoveredPlanet(planet))
        .on("mouseleave", () => setHoveredPlanet(null));

      planetGroup.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 12)
        .attr("fill", darkMode ? "#1e293b" : "#ffffff")
        .attr("stroke", planet.color)
        .attr("stroke-width", 2)
        .attr("class", "transition-all duration-300 group-hover:r-14");

      planetGroup.append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "10px")
        .attr("font-weight", "black")
        .attr("fill", planet.color)
        .text(planet.name.substring(0, 1).toUpperCase());
    });

    // Center Circle
    g.append("circle")
      .attr("r", 8)
      .attr("fill", darkMode ? "#334155" : "#e2e8f0")
      .attr("stroke", darkMode ? "#1e293b" : "#ffffff")
      .attr("stroke-width", 2);

  }, [result, darkMode, t]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Zodiac Wheel */}
      <div className="flex flex-col items-center justify-center p-6 rounded-3xl glass-card border border-white/5 relative overflow-hidden">
        <div className="w-full max-w-[500px] aspect-square relative">
          <svg
            ref={svgRef}
            viewBox="0 0 500 500"
            className="w-full h-full drop-shadow-2xl"
          />
          
          {/* Interactive Tooltip */}
          <AnimatePresence>
            {hoveredPlanet && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute top-4 left-4 p-4 rounded-2xl glass-card border border-white/10 z-20 pointer-events-none"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/5" style={{ color: hoveredPlanet.color }}>
                    <hoveredPlanet.icon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">{hoveredPlanet.label}</div>
                    <div className="text-lg font-black">{t.zodiacSigns[hoveredPlanet.sign]}</div>
                  </div>
                </div>
                <div className="text-xs font-bold opacity-70">
                  {hoveredPlanet.degree}° {t.zodiacSigns[hoveredPlanet.sign]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {planetData.map(p => (
            <motion.div 
              key={p.name} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 cursor-help"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={() => setHoveredPlanet(p)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: p.color }} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aspects Chart */}
      <div className="flex flex-col gap-6">
        <div className="p-8 rounded-3xl glass-card border border-white/5 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
              <Star size={20} />
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight">{t.aspectsTitle}</h4>
              <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Distribution & Intensity</p>
            </div>
          </div>

          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke={darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: darkMode ? "#94a3b8" : "#64748b", fontSize: 10, fontWeight: 'bold' }} 
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[0, 'dataMax + 1']} 
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Aspects"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <RechartsTooltip 
                  contentStyle={{ 
                    backgroundColor: darkMode ? '#1e293b' : '#ffffff', 
                    borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {Object.entries(t.aspectTypes).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{label}</span>
                <span className="text-sm font-black text-indigo-400">{aspectCounts[key] || 0}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend/Info */}
        <div className="p-6 rounded-3xl glass-card border border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent">
          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Info size={16} />
            </div>
            <div>
              <p className="text-xs leading-relaxed opacity-70">
                The <strong>Zodiac Wheel</strong> shows the exact positions of planets at your birth. The <strong>Aspects Radar</strong> visualizes the geometric relationships between these planets, indicating the dominant energies in your personality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthChartVisualizer;
