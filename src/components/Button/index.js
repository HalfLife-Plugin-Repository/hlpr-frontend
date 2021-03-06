import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {common, blue500, blue700, white} from 'styles';

const style = {
    base: {
        height: 45,
        padding: '10px 15px',
        minWidth: 113,
        borderRadius: 50,
        border: 'none',
        textAlign: 'center',
        outline: 'none',
        transition: 'all 0.5s ease',
        fontSize: 14.5,
        fontWeight: 700,
        cursor: 'pointer'
    },
    filled: {
        backgroundColor: blue500,
        ':hover': {
            backgroundColor: blue700
        }
    },
    unfilled: {
        border: `3px solid ${white}`,
        backgroundColor: 'transparent',
        ':hover': {
            color: blue500,
            backgroundColor: white
        }
    }
};

const Button = (props) => (
    <button
        onClick={props.onClick}
        style={[
            common.white,
            style.base,
            props.filled ? style.filled : style.unfilled,
            props.style
        ]}
        type={props.type}>
        {props.label}
        {props.children}
    </button>
);

Button.defaultProps = {
    filled: true,
    onClick: () => {},
    type: 'button'
};

Button.propTypes = {
    filled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.object
};

export default Radium(Button);