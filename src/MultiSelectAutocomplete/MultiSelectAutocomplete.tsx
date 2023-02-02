import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FiCheck, FiSearch, FiX } from 'react-icons/fi';

import { HighlightedMatch } from './components/HighlightedMatch';

import './MultiSelectAutocomplete.css';

type Option = {
  label: string;
  value: any;
};

export interface AutocompleteProps {
  id: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  value: any[];
  options: Option[];
  onChange: (value: any[]) => void;
}

export const MultiSelectAutocomplete = (props: AutocompleteProps) => {
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSelect = (val: any) => {
    if (props.value.includes(val)) {
      props.onChange(props.value.filter(item => item !== val) || []);
    } else {
      props.onChange([...props.value, val]);
    }
  };

  const filtered = useMemo(() => {
    if (!search) return props.options;

    return (
      props.options.filter(
        option =>
          option.label.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) || []
    );
  }, [props.options, search]);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className="autocomplete--multi" ref={inputRef}>
      <label className="autocomplete--multi__label" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="autocomplete--multi__input-container">
        <input
          id={props.id}
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyUp={() => setOpen(true)}
          autoComplete="off"
          placeholder={props.placeholder}
        />
        <FiSearch size={20} color="#ACB3B4" />
        {open && (
          <div className="autocomplete--multi__dropdown">
            {filtered.length === 0 && (
              <div className="autocomplete__empty-list">No results found</div>
            )}
            <ul>
              {filtered.map(item => (
                <li
                  className={`autocomplete__list-item ${props.value.includes(
                    item.value
                  ) && 'list-item--selected'}`}
                  key={item.value}
                  onClick={() => handleSelect(item.value)}
                >
                  <HighlightedMatch content={item.label} filter={search} />
                  {!!props.value.includes(item.value) && (
                    <FiCheck size={12} color="white" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="autocomplete-multi__values">
        {props.value?.map(val => (
          <button
            className="autocomplete-multi__value"
            type="button"
            key={val}
            onClick={() => handleSelect(val)}
          >
            {props.options.find(option => option.value === val)?.label}
            <FiX size={14} />
          </button>
        ))}
      </div>
    </div>
  );
};
