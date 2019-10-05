import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import EditCard from './EditCard'
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    btn: {
        width: '100%',
        height: '100%',
        backgroundColor: '#c1c1c1'
    },
    card: {
        width: '200px',
        height: '300px',
        margin: '10px',
        backgroundColor: '#c1c1c1'
    },
    icon: {
        color: "#fff",
        fontSize: "70px",
        cursor: 'pointer'
    }
}));

export default function AddCard(props) {
    const classes = useStyles();
    const { onRefresh } = props
    const [edit, setEdit] = useState(false);

    const handleRefresh = (onRefreshCallback, setEditCallback) => {
        setEditCallback(false)
        onRefreshCallback()
    }

    if (edit) {
        return (
            <EditCard
                fruit={{}}
                onRefresh={() => handleRefresh(onRefresh, setEdit)}
                onClose={() => setEdit(false)} />
        )
    } else {
        return (
            <Card className={classes.card}>
                <Button onClick={() => setEdit(true)} className={classes.btn}>
                    <AddCircleOutlineIcon className={classes.icon} />
                </Button>
            </Card>
        );
    }
}

AddCard.propTypes = {
    onRefresh: PropTypes.func,
};