// Animated card reusable component

const AnimatedCard = ({className, imgSouce, heading, content}) =>{
    return(
        <div className = {`anim-card-contaner ${className}`}>
            <img src={imgSouce} alt="" className="card-image"/>
            <h2 className="anim-card-heading">{heading}</h2>
            <p className="anim-card-content">{content}</p>
        </div>
    )
}

export default AnimatedCard;