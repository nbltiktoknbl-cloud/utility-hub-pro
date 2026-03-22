export const commonTimezones = [
  { value: 'UTC', label: 'UTC (Universal Coordinated Time)' },
  { value: 'America/New_York', label: 'Eastern Time (US & Canada)' },
  { value: 'America/Chicago', label: 'Central Time (US & Canada)' },
  { value: 'America/Denver', label: 'Mountain Time (US & Canada)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (US & Canada)' },
  { value: 'Europe/London', label: 'London, Dublin, Lisbon' },
  { value: 'Europe/Paris', label: 'Paris, Berlin, Rome, Madrid' },
  { value: 'Europe/Istanbul', label: 'Istanbul, Moscow' },
  { value: 'Asia/Dubai', label: 'Dubai, Abu Dhabi' },
  { value: 'Asia/Karachi', label: 'Karachi, Islamabad' },
  { value: 'Asia/Kolkata', label: 'New Delhi, Mumbai' },
  { value: 'Asia/Bangkok', label: 'Bangkok, Hanoi, Jakarta' },
  { value: 'Asia/Shanghai', label: 'Beijing, Shanghai, Hong Kong' },
  { value: 'Asia/Tokyo', label: 'Tokyo, Seoul' },
  { value: 'Australia/Sydney', label: 'Sydney, Melbourne' },
  { value: 'Pacific/Auckland', label: 'Auckland, Wellington' },
];

export const getUserTimezone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    return 'UTC';
  }
};
