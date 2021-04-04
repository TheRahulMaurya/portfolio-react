import Button from '../Global/Button';
import './Header.css';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <Nav />
            <div className="header-content">
                <h1 className="heading">
                   Welcome, Have a nice day.
                </h1>
                <Button className="btn-light" href = "#" label = "Button 1" />
                <Button className="btn-dark" href = "#" label = "Button 2" />
            </div>
        </header>
    )
}

export default Header;