import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header(props)
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand text-white" to="/" >{props.tittle}</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-white active" aria-current="page" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">About</Link>
                    </li>
                    
                    </ul>
                    {props.searchBar? <form className="d-flex">
                    <input className="form-control btn-secondary me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                    </form> : <h6 className="text-white">No Search Bar</h6>}
                </div>
                </div>
            </nav>
        </div>
    )
}
Header.defaultProps = {
    tittle: "Your Tittle Here",
    searchBar : true
}
Header.propTypes = {
    tittle: propTypes.string,
    searchBar: propTypes.bool.isRequired
}