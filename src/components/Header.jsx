import '../styles/Header.css';
import shortlyLogo from '../images/logo.svg';

function Header() {
    return (
        <div className="header-container">
            <div className="header-body">
                <div className='header-left'>
                    <div className='header-logo'><img src={shortlyLogo} className='logo' alt='shortly logo'/></div>
                    <div className='header-links'>
                        <div className='header-link'>Features</div>
                        <div className='header-link'>Pricing</div>
                        <div className='header-link'>Resources</div>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-link' id='login'>Login</div>
                    <button className='sign-up-button'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;