import './Card.css';

const Card = ({className, icon, heading, content}) =>{
    return(
        <div className={`card-item ${className}`}>
            <ion-icon name={icon}></ion-icon>
            <h3 className="card-heading">{heading}</h3>
            <p className="card-content">{content}</p>
        </div>
    )
}

export default Card;