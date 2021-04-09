// Animated card reusable component

import './AnimatedCard.css';

const AnimatedCard = ({className, imgSouce, rank, heading, content, stars}) =>{
    return(
        <div className = {`anim-card-contaner ${className}`}>
            <img src={imgSouce} alt="" className="card-image"/>
            <h1 className="anim-card-text main-title">{heading}</h1>
            <div className="rank">{rank}</div>
            <div className="image-back">
                <div className="back-timeline"></div>
                <h2 className="anim-card-heading anim-card-text">{heading}</h2>
                <p className="anim-card-content anim-card-text">{content}</p>
                <div className="five-star">
                    <span className={`fa fa-star ${((stars >= 1) ? "checked":"")}`}></span>
                    <span className={`fa fa-star ${((stars >= 2) ? "checked":"")}`}></span>
                    <span className={`fa fa-star ${((stars >= 3) ? "checked":"")}`}></span>
                    <span className={`fa fa-star ${((stars >= 4) ? "checked":"")}`}></span>
                    <span className={`fa fa-star ${((stars >= 5) ? "checked":"")}`}></span>
                </div>
            </div>
        </div>
    )
}

export default AnimatedCard;