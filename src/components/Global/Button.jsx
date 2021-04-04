import './Button.css'
const Button = ({className, label, href}) => {
    return(
        <a className={`btn ${className}`} href={href}> 
        {label}
        </a>
    )
}

export default Button;