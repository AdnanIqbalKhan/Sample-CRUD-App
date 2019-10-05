import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    card: {
        width: '400px',
        height: '300px',
        margin: '10px',
        borderColor: '#000'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: '5px',
        marginBottom: '5px',
    },
    w100: {
        width: 400 - theme.spacing(2)
    },
    w25: {
        width: 100 - theme.spacing(2)
    },
    menu: {
        width: 200,
    },
    input: {
        // fontSize: "0.25em"
    },
    main: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: '0',
        marginBottom: '0',
        display: 'grid',
        gridTemplateColumns: '90% auto',
    },
    title: {
        fontWeight: 'bold',
        fontSize: "1.25em",
        display: 'block',
    },
    closeBtn: {
        padding: 0,
    }
}));



export default function EditCard(props) {
    const classes = useStyles();
    const { fruit, onRefresh, onClose } = props
    const [editFruit, setFruit] = useState(fruit);

    const handleChange = name => event => {
        setFruit({ ...editFruit, [name]: event.target.value });
    };
    const inputProps = { classes: { input: classes.input } }
    const menuProps = { MenuProps: { className: classes.menu } }

    const currencies = [
        { value: 'PKR', label: 'PKR', },
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR', }
    ];

    const unit = [
        { value: 'Kg', label: 'Kg' },
        { value: 'Dozen', label: 'Dozen' }
    ];

    const handleClickSave = (fruit, onRefreshCallback, id) => {
        var method
        if (id === undefined) {
            method = 'POST'
        } else {
            method = 'PUT'
        }
        fetch("http://localhost:5000/fruits/", {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fruit)
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

    return (
        <Card className={classes.card}>
            <div className={classes.main}>
                <span className={classes.text}>
                    <span className={classes.title}>{fruit.id === undefined ? "Add Fruit" : "Edit Fruit"}</span>
                </span>
                <IconButton onClick={onClose} className={classes.closeBtn}>
                    <CloseIcon />
                </IconButton>
            </div>

            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    defaultValue={editFruit.name}
                    className={[classes.textField, classes.w100].join(' ')}
                    onChange={handleChange('name')}
                    InputProps={inputProps}
                    variant="filled" />
                <TextField
                    id="imageURL"
                    label="Image URL"
                    defaultValue={editFruit.imageURL}
                    className={[classes.textField, classes.w100].join(' ')}
                    onChange={handleChange('imageURL')}
                    InputProps={inputProps}
                    variant="filled" />
                <TextField
                    id="quantity"
                    label="Quantity"
                    defaultValue={editFruit.quantity}
                    className={[classes.textField, classes.w25].join(' ')}
                    onChange={handleChange('quantity')}
                    InputProps={inputProps}
                    type={'number'}
                    variant="filled" />
                <TextField
                    id="unit"
                    select
                    label="Unit"
                    className={[classes.textField, classes.w25].join(' ')}
                    value={editFruit.unit}
                    onChange={handleChange('unit')}
                    InputProps={inputProps}
                    variant="filled"
                    SelectProps={menuProps}>
                    {unit.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="currency"
                    select
                    label="Currency"
                    className={[classes.textField, classes.w25].join(' ')}
                    value={editFruit.currency}
                    onChange={handleChange('currency')}
                    InputProps={inputProps}
                    variant="filled"
                    SelectProps={menuProps}>
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="price"
                    label="Price"
                    defaultValue={editFruit.price}
                    className={[classes.textField, classes.w25].join(' ')}
                    type={'number'}
                    onChange={handleChange('price')}
                    InputProps={inputProps}
                    variant="filled" />
                <Button
                    onClick={() => handleClickSave(editFruit, onRefresh, fruit.id)}
                    className={[classes.textField, classes.w100].join(' ')}
                    variant="outlined">
                    {'Save'}
                </Button>
            </form>
        </Card>
    );
}

EditCard.propTypes = {
    fruit: PropTypes.object,
    onRefresh: PropTypes.func,
    onClose: PropTypes.func,
};