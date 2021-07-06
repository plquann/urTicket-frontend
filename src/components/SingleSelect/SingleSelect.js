import React from 'react';
import Select, { components } from 'react-select';

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
    return (
        <ValueContainer {...props}>
            <Placeholder {...props} isFocused={props.isFocused}>
                {props.selectProps.placeholder}
            </Placeholder>
            {React.Children.map(children, child =>
                child && child.type !== Placeholder ? child : null
            )}
        </ValueContainer>
    );
};


const SingleSelect = (props) => {
    const { handleChange, options, placeholder, maxMenuHeight = "300", backgroundColor} = props;
    const colourStyles = {
        control: provided => ({
            ...provided,
            backgroundColor: 'transparent',
            border: '1px solid rgba(163, 177, 198, 0.5)',
            color: '#ffffff',
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#3f4b50 ' : 'transparent',
            cursor: 'pointer',
        }),
        menu: provided => ({
            ...provided,
            backgroundColor: '#1a222a',
            border: '1px solid rgba(163, 177, 198, 0.151)',
            textAlign: 'center',
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            overflow: "visible",
            padding: '7px 10px 7px 15px',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#ffffff',
            overflow: 'hidden',
        }),
        input: (provided) => ({ ...provided, color: '#ffffff' }),
        placeholder: (provided, state) => {
            const isChanged = state.hasValue || state.selectProps.inputValue || state.selectProps.menuIsOpen;
            return {
                ...provided,
                position: 'absolute',
                padding: '0 8px',
                top: isChanged ? 0 : "50%",
                color: isChanged ? '#31d7a9' : "#dbe2fb",
                transition: 'all 0.1s',
                backgroundColor: backgroundColor || '#23282B',
                display: 'inline-block',
            }
        },
        indicatorSeparator: styles => ({ ...styles, width: '0px' }),
    };


    return (
        <Select
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            components={{ ValueContainer: CustomValueContainer }}
            styles={colourStyles}
            blurInputOnSelect
            maxMenuHeight={maxMenuHeight}
            {...props}
        />
    )
}

export default SingleSelect;