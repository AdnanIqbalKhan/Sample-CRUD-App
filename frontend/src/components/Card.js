import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from './CardHeader';
import Chip from './Chip';
import EditCard from './EditCard'


const useStyles = makeStyles(() => ({
    card: {
        width: '200px',
        height: '300px',
        margin: '10px'
    },
    media: {
        height: '100px',
        width: '200px',
        paddingTop: '80px',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
}));

export default function FruitCard(props) {
    const classes = useStyles();

    const { fruit, onRefresh } = props
    const [edit, setEdit] = useState(false);

    const handleDeleteClick = (id, onRefreshCallback) => {
        fetch("http://localhost:5000/fruits/", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        }).then(res => res.json())
            .then((result) => {
                if (result.hasOwnProperty('error')) {
                    console.log(result)
                } else {
                    onRefreshCallback()
                }
            }, (error) => {
                console.error(error)
            })
    }

    const handleRefresh = (onRefreshCallback, setEditCallback) => {
        setEditCallback(false)
        onRefreshCallback()
    }

    if (edit) {
        return (<EditCard
            fruit={fruit}
            onRefresh={() => handleRefresh(onRefresh, setEdit)}
            onClose={() => setEdit(false)} />)
    } else {
        return (<Card className={classes.card}>
            <CardHeader
                title={fruit.name}
                sub={fruit.quantity + " " + fruit.unit}
                onEdit={() => setEdit(true)}
                onDelete={() => handleDeleteClick(fruit.id, onRefresh)}
            />
            <CardMedia
                className={classes.media}
                image={fruit.imageURL}
                title={fruit.name}
            />
            <Chip
                label={fruit.currency}
                text={fruit.price}
            />
        </Card>)
    }
}

FruitCard.propTypes = {
    fruit: PropTypes.object,
    onRefresh: PropTypes.func,
};