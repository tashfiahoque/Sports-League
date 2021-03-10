import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css'

const Home = () => {
    const [leaguesCard, setLeaguesCard] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(res => setLeaguesCard(res.leagues))
    }, [])

    return (
        <>
            {leaguesCard.map(leagueCard => <Leagues leagueCard={leagueCard} key={leagueCard.idLeague} />)}
        </>
    );
};

export default Home;