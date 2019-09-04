import React from 'react';
import Select from 'react-select';

export default function SearchBarComponent(props) {
  const colourStyles = {
    control: styles => ({
      ...styles,
      border: '1px solid black',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid black',
      },
      borderRadius: '0'
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        borderRadius: '0',
        backgroundColor: isFocused ? '#437f5b' : 'white',
        color: 'black'
      }
    },
  };
  const options = props.data.map(item => ({ label: item.name, value: item }));

  return (
    <Select
      className='react-select-container'
      options={options}
      onChange={props.handleChange}
      styles={colourStyles}
    />
  )
}