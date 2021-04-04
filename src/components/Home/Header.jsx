import Button from '../Global/Button';
import './Header.css';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <Nav />
            <div className="header-content">
                <h1 className="heading">
                   Wanna touch the sky!!
                </h1>
                <div className="btn-container">
                    <Button className="btn-light" href = "#" label = "Touch Me" />
                    <Button className="btn-dark" href = "#" label = "Explore Me" />
                </div>
            </div>
        </header>
    )
}

export default Header;