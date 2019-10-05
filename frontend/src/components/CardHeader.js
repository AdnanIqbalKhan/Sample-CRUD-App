import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: '10px',
        width: '100%',
        height: '45px',
        display: 'grid',
        gridColumnGap: '10px',
        gridTemplateColumns: 'auto 80px auto',
    },
    text: {
        height: '45px',
    },
    title: {
        height: "30px",
        fontWeight: "bold",
        fontSize: "24px",
        display: 'block',
    },
    sub: {
        height: "15px",
        fontSize: "12px",
        display: 'block',
    },
    small: {
        fontSize: '20px',
    }
}));

export default function CardHeader(props) {
    const classes = useStyles();

    const { title, sub, onDelete, onEdit } = props
    return (
        <div className={classes.main}>
            <IconButton onClick={onDelete}>
                <CloseIcon className={classes.small} />
            </IconButton>
            <span className={classes.text}>
                <span className={classes.title}>{title}</span>
                <span className={classes.sub}>{sub}</span>
            </span>
            <IconButton onClick={onEdit}>
                <EditIcon className={classes.small} />
            </IconButton>
        </div>
    );
}

CardHeader.propTypes = {
    title: PropTypes.string,
    sub: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};