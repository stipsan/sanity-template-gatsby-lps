import React, { useState, useEffect } from 'react';
import bust from '../utils/bust';
import { FiSearch } from 'react-icons/fi';
import { FormField } from '@sanity/base/components';
import {
  Select,
  TextInput,
  Autocomplete,
  Radio,
  Grid,
  Card,
  Text,
  Flex,
  Box,
  Avatar,
} from '@sanity/ui';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'; // utils send data back to sanity dataset
import { useId } from '@reach/auto-id'; // hook to generate unique IDs

const Icon = React.forwardRef((props, ref) => {
  //creates react component
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

  const [icons, setIcons] = useState([]); //set state for icons

  // Creates a unique ID for our input
  const inputId = useId();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getIcons();
  }, []);

  async function getIcons() {
    
    const iconPackSelection = await (
      await fetch(
        bust(`${type.icomoonPath}/selection.json`)
      )
    ).json();
    const icons = iconPackSelection.icons.map(function (icon) {
      const iconName = icon.properties.name;
      
      return {
        value: iconName,
        payload: icon,
      };
      
    });
    setIcons(icons);
  }

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (value) => {
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(value ? set(value) : unset()));
    },
    [onChange]
  );

  return (
    <>
      <FormField
        description={type.description} // Creates description from schema
        title={type.title} // Creates label from schema title
        __unstable_markers={markers} // Handles all markers including validation
        __unstable_presence={presence} // Handles presence avatars
        compareValue={compareValue} // Handles "edited" status
        inputId={inputId}
      >
        <Card padding={[0, 0, 0]} paddingBottom={[0, 0, 0]}>
          <Autocomplete
            value={value} // Current field value
            ref={ref}
            id={inputId} // A unique ID for this input
            filterOption={(
              query,
              icon // custom search filter
            ) => icon.value.toLowerCase().indexOf(query.toLowerCase()) > -1}
            fontSize={[2, 2, 3]}
            icon={FiSearch}
            openButton
            onChange={handleChange}
            options={icons} // options with `payload`
            padding={[3, 3, 4]}
            placeholder="Type to find icon …"
            renderOption={(
              option // custom option render function
            ) => (
              <Card as="button">
                <Flex align="center">
                  <Box paddingLeft={3} paddingY={2}>
                    <i className={`icon-${option.value}`}></i>
                  </Box>
                  <Box flex={1} padding={3}>
                    <Text size={[2, 2, 3]}>{option.value}</Text>
                  </Box>
                </Flex>
              </Card>
            )}
            //custom value render function
            renderValue={(value, option) => {
              return value;
            }}
          />
        </Card>
      </FormField>
    </>
  );
});

// Create the default export to import into our schema
export default Icon;
