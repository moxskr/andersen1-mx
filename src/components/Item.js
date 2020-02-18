import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addToFavourite, removeFromFavourite} from "../actions/favourite";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
    item : {
        marginTop : '20px',
        padding : theme.spacing(2)
    },
    img : {
        width : '100%'
    },
    pad : {
        paddingLeft : '15px',
        paddingRight : '15px'
    },
    btn : {
        marginRight : '10px'
    }
}));

const Item = (props) => {
    const styles = useStyle();
    const {id, name, rating, image, genres, premiered, isFavourite} = props.item;
    let imageUrl = '';
    if(image) {
        imageUrl = image.medium;
    }else{
        imageUrl = '';
    }
    const genresList = Object.values(genres);
    const add = () => {
        props.addToFavourite(props.obj);
    };
    const remove = () => {
        props.removeFromFavourite(props.obj);
    };
    return <Paper className={styles.item} data-test="component-item">
        <Grid container>
            <Grid item lg={3} className={styles.pad}>
                <img src={imageUrl} alt="" data-test="item-image"/>
            </Grid>
            <Grid item lg={9} className={styles.pad}>
                <Typography variant="h6" data-test="item-title">{name}</Typography>
                <p data-test="item-rating">Rating : {rating.average || 'No info'}</p>
                <p data-test="item-genres">Genres : {!!genresList.length || 'No info'}</p>
                <ul className="genres">
                    {!!genresList.length && genresList.map(it => <li key={it}>{it}</li>)}
                </ul>
                <p data-test="item-premiered">Premiered : {premiered}</p>
                <div className="item--footer">
                    <Link to={`item/${id}`} className="btn btn-success">
                        <Button variant="contained" color="primary" className={styles.btn} data-test="more-information-button">
                            More information
                        </Button>
                    </Link>
                    {isFavourite ? <Button variant="contained" color="secondary" onClick={remove} data-test="remove-button">
                            Remove from favourite
                        </Button> :
                        <Button cvariant="contained" color="default" onClick={add} data-test="add-button">
                            Add to favourite
                        </Button>}
                </div>
            </Grid>
        </Grid>
    </Paper>
};

Item.propTypes = {
    item : PropTypes.object,
    obj : PropTypes.object
};

export default connect(null, {addToFavourite, removeFromFavourite})(Item);
