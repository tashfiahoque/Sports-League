import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <Link to={`/league/${idLeague}`}><h1>{strLeague}</h1></Link>
            <h2>Sports Type: {strSport}</h2>
            <h3>{idLeague}</h3>
            <img src={success} alt="" style={{ width: "20%" }} />
        </div>
    );
};

export default Leagues;