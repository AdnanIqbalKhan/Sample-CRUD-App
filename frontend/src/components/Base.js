import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card'
import AddCard from './AddCard'

export default class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            fruits: []
        };
        this.loadData = this.loadData.bind(this)
    }

    loadData() {
        fetch("http://localhost:5000/fruits/", {
            method: "GET"
        }).then(res => res.json())
            .then((result) => {
                var data
                if (result.hasOwnProperty('error')) {
                    data = []
                } else {
                    data = result
                }
                this.setState({
                    isLoaded: true,
                    fruits: data
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        const { error, isLoaded, fruits } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Paper style={{
                    padding: "10px",
                    width: '70%',
                    margin: 'auto'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={this.spacing}>
                                <Grid key={"add"} item>
                                    <AddCard onRefresh={this.loadData}></AddCard>
                                </Grid>
                                {fruits.length > 0 ?
                                    fruits.map(fruit => (
                                        <Grid key={fruit.id} item>
                                            <Card
                                                fruit={fruit}
                                                onRefresh={this.loadData} />
                                        </Grid>
                                    ))
                                    : <span>No Record Found</span>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            );
        }
    }
}