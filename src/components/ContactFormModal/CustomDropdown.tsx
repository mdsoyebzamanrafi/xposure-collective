import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  name: string;
  value: string;
  placeholder: string;
  options: Option[];
  onChange: (name: string, value: string) => void;
  className?: string;
  error?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  name,
  value,
  placeholder,
  options,
  onChange,
  className = '',
  error = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && optionsRef.current) {
      const selectedIndex = options.findIndex(option => option.value === value);
      if (selectedIndex >= 0) {
        setHighlightedIndex(selectedIndex);
        const optionElement = optionsRef.current.children[selectedIndex] as HTMLElement;
        if (optionElement) {
          optionElement.scrollIntoView({ block: 'nearest' });
        }
      }
    }
  }, [isOpen, value, options]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
        event.preventDefault();
        setIsOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setHighlightedIndex(prev => 
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (highlightedIndex >= 0) {
          handleOptionSelect(options[highlightedIndex].value);
        }
        break;
      case 'Tab':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const handleOptionSelect = (optionValue: string) => {
    onChange(name, optionValue);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHighlightedIndex(value ? options.findIndex(opt => opt.value === value) : 0);
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className={`custom-dropdown ${className} ${error ? 'error' : ''} ${isOpen ? 'open' : ''}`}
    >
      <div
        className="dropdown-trigger"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${name}-options`}
        aria-label={placeholder}
      >
        <span className={`dropdown-text ${!selectedOption ? 'placeholder' : ''}`}>
          {displayText}
        </span>
        <svg 
          className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <polyline 
            points="6,9 12,15 18,9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {isOpen && (
        <div 
          ref={optionsRef}
          className="dropdown-options"
          role="listbox"
          id={`${name}-options`}
          aria-label={placeholder}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              className={`dropdown-option ${
                highlightedIndex === index ? 'highlighted' : ''
              } ${value === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option.value)}
              onMouseEnter={() => setHighlightedIndex(index)}
              role="option"
              aria-selected={value === option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;