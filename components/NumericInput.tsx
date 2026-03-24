import React from 'react';

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  nextRef?: React.RefObject<HTMLInputElement | null>;
  prevRef?: React.RefObject<HTMLInputElement | null>;
  id?: string;
  error?: boolean;
  title?: string;
}

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(({ 
  value, 
  onChange, 
  placeholder, 
  className, 
  maxLength,
  nextRef,
  prevRef,
  id,
  error,
  title
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (maxLength) {
      val = val.slice(0, maxLength);
    }
    onChange(val);
    
    // Auto-tab to next field if maxLength is reached
    if (maxLength && val.length === maxLength && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Auto-tab back to previous field on backspace if current field is empty
    if (e.key === 'Backspace' && value === '' && prevRef?.current) {
      prevRef.current.focus();
    }
  };

  return (
    <input
      ref={ref}
      id={id}
      type="text"
      inputMode="numeric"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      title={title}
      className={`${className} ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
      autoComplete="off"
    />
  );
});

NumericInput.displayName = 'NumericInput';

export default NumericInput;
