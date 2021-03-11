import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BoysPoster from '../../sports-mania-main/Photo/Rectangle 28.png';
import GirlsPoster from '../../sports-mania-main/Photo/female.png';
import location from '../../sports-mania-main/Icon/found 1.png';
import flag from '../../sports-mania-main/Icon/flag (1) 1.png';
import ball from '../../sports-mania-main/Icon/football (1) 1.png';
import gender from '../../sports-mania-main/Icon/male-gender-sign 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './LeagueDetail.css';


const LeagueDetails = () => {

    const { idLeague } = useParams();
    const [leagueDetails, setLeagueDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(res => setLeagueDetails(res.leagues[0]))
    }, [idLeague])
    console.log(leagueDetails);
    let { strBadge, strGender, strDescriptionEN, strLeague, strBanner,
        strCountry, intFormedYear, strSport, strFacebook, strTwitter, strYoutube } = leagueDetails;
    return (
        <>
            <div className="league-details"
                style={
                    strBanner ?
                        { backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${strBanner})` }
                        : { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(../../sports-mania-main/bg.png)' }
                }>
                <img src={strBadge} alt="" />
            </div>
            <div className="league-details-info">
                <div className="container">
                    <div className="row league-details-info-main">
                        <div className="col-md-6 col-12 league-details-info-text">
                            <h1>{strLeague}</h1>
                            <ul className="list-group list-group-horizontal items">
                                <li className="list-group"><img src={location} alt="" /></li>
                                <li className="list-group"><h4>Founded: {intFormedYear}</h4></li>
                            </ul>
                            <ul className="list-group list-group-horizontal items">
                                <li className="list-group"><img src={flag} alt="" /></li>
                                <li className="list-group"><h4>Contry: {strCountry}</h4></li>
                            </ul>
                            <ul className="list-group list-group-horizontal items">
                                <li className="list-group"><img src={ball} alt="" /></li>
                                <li className="list-group"><h4>Sport Type: {strSport === 'Soccer' ? strSport = "Football" : strSport}</h4></li>
                            </ul>
                            <ul className="list-group list-group-horizontal items">
                                <li className="list-group">
                                    {strGender === 'Male' ? <img src={gender} alt="" />
                                        : <FontAwesomeIcon icon={faVenus} />}</li>
                                <li className="list-group"><h4>Gender: {strGender}</h4></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12">
                            {
                                strGender === 'Male' ? <img src={BoysPoster} alt="boys_poster" className="img-fluid" />
                                    : <img src={GirlsPoster} alt="girls_poster" className="img-fluid" />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>{strDescriptionEN}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="list-group icons">
                                <li className="list-group-horizontal">
                                    <a href={strFacebook ? `http://${strFacebook}`
                                        : "http://www.facebook.com"}
                                        rel="noreferrer" target="_blank"
                                        className="social facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href={strTwitter ? `http://${strTwitter}`
                                        : "http://www.twitter.com"}
                                        rel="noreferrer" target="_blank"
                                        className="social twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href={strYoutube ? `http://${strYoutube}`
                                        : "http://www.youtube.com"}
                                        rel="noreferrer" target="_blank"
                                        className="social youtube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeagueDetails;