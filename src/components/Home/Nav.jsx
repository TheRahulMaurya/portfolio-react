import Avatar from './Avatar';
import './Nav.css'
const Nav = () => {
    return(
        <nav>
            <Avatar />
            <h1 className="home-heading">
                Portfolio
            </h1>
            <ul >
                <li><a className = "nav-items" href="#">Home</a></li>
                <li><a className = "nav-items" href="#">About</a></li>
                <li><a className = "nav-items" href="#">Work</a></li>
                <li><a className = "nav-items" href="#">Blog</a></li>
            </ul>
        </nav>
    )
}

export default Nav;