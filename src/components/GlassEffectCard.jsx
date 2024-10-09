import React from 'react';
import "../App.css"; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

const GlassEffectCard = ({ imageSrc, text , path}) => {
    return (
        <Link to={path} className="containers col-sm-12 col-lg-4 col-md-6 col-xl-4">
            <div className="card glass-effect-card">
                <img src={imageSrc} className="card-img-top" alt="Card" style={{height: "300px"}} />
                <div className="overlay">
                    <div className="text"><strong>{text}</strong></div>
                </div>
            </div>
        </Link>
    );
};

export default GlassEffectCard;
