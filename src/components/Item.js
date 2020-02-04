import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addToFavourite, removeFromFavourite} from "../actions/favourite";

const Item = (props) => {
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
    return <div className="item row">
        <div className="col-lg-3">
            <img src={imageUrl} alt=""/>
        </div>
        <div className="col-lg-9">
            <h4>{name}</h4>
            <p>Rating : {rating.average || 'No info'}</p>
            <p>Genres : {!!genresList.length || 'No info'}</p>
            <ul className="genres">
                {!!genresList.length && genresList.map(it => <li key={it}>{it}</li>)}
            </ul>
            <p>Premiered : {premiered}</p>
            <div className="item--footer">
                <Link to={`item/${id}`} className="btn btn-success">
                    More information
                </Link>
                {isFavourite ? <button className="btn btn-danger" onClick={remove}>
                        Remove to favourite
                    </button> :
                <button className="btn btn-primary" onClick={add}>
                    Add to favourite
                </button>}
            </div>
        </div>
    </div>
};

export default connect(null, {addToFavourite, removeFromFavourite})(Item);
