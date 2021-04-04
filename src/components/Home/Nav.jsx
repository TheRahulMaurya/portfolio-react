import Avatar from './Avatar';
import './Nav.css'
const Nav = () => {
    return(
        <nav>
            <Avatar />
            <ul >
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Work</a></li>
                <li> <a href="#">Blog</a></li>
            </ul>
        </nav>
    )
}

export default Nav;