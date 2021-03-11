import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css';

const Home = () => {

    const [leaguesCard, setLeaguesCard] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(res => setLeaguesCard((res.leagues).slice(0, 299)))
    }, [])

    return (
        <>
            <div className="home  d-flex align-items-center justify-content-center">
                <h1>Sports Basket</h1>
            </div>
            <div className="league-card">
                <div className="container">
                    <div className="row">
                        {
                            !leaguesCard ? <p>Loading.....</p> : leaguesCard.map(leagueCard => <Leagues
                                leagueCard={leagueCard}
                                key={leagueCard.strLeague} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;