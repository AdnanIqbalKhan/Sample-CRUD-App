import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: "10px 0",
        display: "inline-block",
        padding: "0 25px",
        height: "max-content",
        fontSize: "18px",
        lineHeight: "30px",
        borderRadius: "25px",
        backgroundColor: "#d1d1d1"
    },
    label: {
        float: "left",
        margin: "0 10px 0 -25px",
        height: "max-content",
        width: "50px",
        borderRadius: "25px 0 0 25px",
        backgroundColor: "#000",
        color: "#fff"
    }

}));

export default function Chip(props) {
    const classes = useStyles();
    const { label, text } = props
    return (
        <div className={classes.chip}>
            <span className={classes.label}>{label}</span>
            {text}
        </div>
    );
}

Chip.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};