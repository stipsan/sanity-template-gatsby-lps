import React, { useState, useEffect } from 'react';

import { FormField } from '@sanity/base/components';
import { TextInput } from '@sanity/ui';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
// be sure to npm install @reach/auto-id
import { useId } from '@reach/auto-id'; // hook to generate unique IDs

const Icon = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    placeholder, // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
  } = props;

  // Creates a unique ID for our input
  const inputId = useId();

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = event.currentTarget.value; // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return 'Hello World';
});

// Create the default export to import into our schema
export default Icon;
