import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BoysPoster from '../../sports-mania-main/Photo/Rectangle 28.png';

import GirlsPoster from '../../sports-mania-main/Photo/female.png';

const LeagueDetails = () => {

    const { idLeague } = useParams();
    const [leagueDetails, setLeagueDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(res => setLeagueDetails(res.leagues[0]))
    }, [idLeague])
    console.log(leagueDetails)
    return (
        <div>
            <h1>{leagueDetails.strGender}</h1>
            <img src={leagueDetails.strBadge} alt="" />
            {leagueDetails.strGender === 'Male' ? <img src={BoysPoster} alt="" /> : <img src={GirlsPoster} alt="" />}
        </div>
    );
};

export default LeagueDetails;