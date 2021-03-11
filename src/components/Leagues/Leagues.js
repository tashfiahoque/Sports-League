import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Leagues.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Leagues = (props) => {

    let success;
    const { idLeague, strLeague, strSport } = props.leagueCard;
    const [badge, setBadge] = useState({})

    const change = () => {
        if (props.leagueCard.strSport === "Soccer") props.leagueCard.strSport = "Football"
    }
    change();
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(res => setBadge(res.leagues[0]))
    }, [idLeague])
    if (idLeague === badge.idLeague) {
        success = badge.strBadge
    }

    return (
        <>
            <div className="col-md-4">
                <div className="single-item text-center my-4">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={success} alt="avatar" />
                        <div className="card-body">
                            <h3>{strLeague}</h3>
                            <h4>Sports Type: {strSport}</h4>
                            <Link to={`/league/${idLeague}`}><button className="btn btn-sm explore-button">Explore
                                <span><FontAwesomeIcon icon={faArrowRight} className="explore-icon" /></span> </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leagues;