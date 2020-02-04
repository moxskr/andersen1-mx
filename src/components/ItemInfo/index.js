import React from 'react';
import {Link, withRouter} from "react-router-dom";

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
        if(this.state.filmInfo){
            const {name, image, url, language, officialSite, network, summary} = this.state.filmInfo;
            return(
                <div className="info">
                    <div className="container">
                        <div className="row item-info">
                            <div className="col-lg-3">
                                <img src={image.original} alt=""/>
                            </div>
                            <div className="col-lg-9">
                                <h1>{name}</h1>
                                <Link to={url}>{url}</Link>
                                <p><span>Language : </span>{language}</p>
                                <p><span>Official site : </span> <Link to={officialSite}>{officialSite}</Link></p>
                                <p><span>Country : </span>{network ? network.country.name : 'No info'}</p>
                                <div className="summary" dangerouslySetInnerHTML={{ __html : summary}}></div>
                                <button className="btn btn-danger" onClick={this.go_back}>
                                    Go back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default withRouter(ItemInfo);
