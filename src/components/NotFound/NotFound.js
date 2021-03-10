import React from 'react';
import './NotFound.css';
import img from '../../sports-mania-main/Leauge Logo/image 2.png';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='hello d-flex align-items-center justify-content-center'>
                    <div className="col-md-4 card-container">
                        <div className="cards ">
                            <figure className="front">
                                <img src={img} alt="" />
                                <p>name</p>
                                <p>details</p>
                            </figure>
                            <figure className="back"><button>hello</button></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;