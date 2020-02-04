import React from 'react';
import {Link, withRouter} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
    itemInfo : {
        padding : '20px'
    },
    pad : {
        paddingLeft : '15px',
        paddingRight : '15px'
    },
    img : {
        width : '100%'
    }
};

class ItemInfo extends React.Component{
    state = {
        filmInfo : null
    };
    async componentDidMount() {
        const {id} = this.props.match.params;
        const resp = await fetch(`http://api.tvmaze.com/shows/${id}`);
        const data = await resp.json();
        this.setState({
            filmInfo : data
        })
    }
    go_back = () => {
        this.props.history.goBack();
    };
    render() {
        const {classes} = this.props;
        if(this.state.filmInfo){
            const {name, image, url, language, officialSite, network, summary} = this.state.filmInfo;
            return(
                <div className="info">
                    <Container className="container">
                        <Paper className={classes.itemInfo}>
                            <Grid container>
                                <Grid item lg={3} className={classes.pad}>
                                    <img src={image.original} alt="" className={classes.img}/>
                                </Grid>
                                <Grid item lg={9} className={classes.pad}>
                                    <Typography variant="h4">{name}</Typography>
                                    <Link to={url}>{url}</Link>
                                    <p><span>Language : </span>{language}</p>
                                    <p><span>Official site : </span> <Link to={officialSite}>{officialSite}</Link></p>
                                    <p><span>Country : </span>{network ? network.country.name : 'No info'}</p>
                                    <div className="summary" dangerouslySetInnerHTML={{ __html : summary}}></div>
                                    <Button variant="contained" color="secondary" onClick={this.go_back}>
                                        Go back
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default withRouter(withStyles(styles)(ItemInfo));
