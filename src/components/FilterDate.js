import React from 'react';
import {Paper, withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {connect} from 'react-redux';
import {setFilter} from "../actions/filter";
import {selectFilterDate} from "../selectors";
import {fetchDateFromLocal} from "../utils/api";
import Typography from "@material-ui/core/Typography";

const styles = {
    container : {
        marginTop : '20px',
        padding : '20px'
    },
    btn : {
        textAlign : 'right'
    },
};

class FilterDate extends React.Component{
    constructor(props) {
        super(props);
        if(fetchDateFromLocal()) {
            props.setFilter(fetchDateFromLocal())
        }
        this.state = {
            date : fetchDateFromLocal() || ''
        };
    }
    handle = e => {
        if(!this.props.filterDate){
            this.setState({
                date : e.target.value
            });
        }else{
            this.setState({
                date : e.target.value
            }, () => {
                this.props.setFilter(this.state.date)
            })
        }
    };
    submit = () => {
        this.props.setFilter(this.state.date);
    };
    cancel = () => {
        this.setState({
            date : ''
        }, () => {
            this.props.setFilter(this.state.date);
        });

    };
    render() {
        const {classes} = this.props;
        return <Paper className={classes.container} data-test="component-filter">
            <Grid container justify="space-between">
                <Grid item lg={12}>
                    <Typography variant="h6">Choose date</Typography>
                </Grid>
                <Grid item lg={3}>
                    <TextField
                        type="date"
                        value={this.state.date}
                        onChange={this.handle}
                        data-test="date-picker"
                    />
                </Grid>
                <Grid item lg={3} className={classes.btn}>
                    {this.props.filterDate ?
                        <Button variant="contained" color="secondary" onClick={this.cancel} data-test="cancel">
                            Cancel
                        </Button> :
                        <Button variant="contained" color="primary" onClick={this.submit} data-test="submit">
                            Submit
                        </Button>
                    }

                </Grid>
            </Grid>
        </Paper>
    }
}

const mapStateToProps = state => ({
    filterDate : selectFilterDate(state)
});

export default connect(mapStateToProps, {setFilter})(withStyles(styles)(FilterDate));
