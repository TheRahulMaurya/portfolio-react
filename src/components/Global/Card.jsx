import './Card.css';

const Card = ({icon, heading, content}) =>{
    return(
        <div className="card-item">
            <ion-icon name={icon}></ion-icon>
            <h2 className="card-headind">{heading}</h2>
            <h4 className="card-content">{content}</h4>
        </div>
    )
}

export default Card;