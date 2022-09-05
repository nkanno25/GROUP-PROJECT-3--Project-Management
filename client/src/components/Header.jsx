import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                <a href="/Signup">Signup</a>
            </div>
        </div>
    );
}