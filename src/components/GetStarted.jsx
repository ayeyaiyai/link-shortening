import { useState } from 'react';
import '../styles/GetStarted.css';
import working from '../images/illustration-working.svg';

function GetStarted() {
    const [error, setError] = useState(true);

    return (
        <div className="get-started-container">
            <div className='get-started-body'>
                <div className='get-started-left'>
                    <div className='get-started-title'>More than just shorter links</div>
                    <div className='get-started-subtitle'>Build your brand's recognition and get detailed insights on how your links are performing.</div>
                    <button className='get-started-button'>Get Started</button>
                </div>
                <div className='get-started-right'><img src={working} id='working-image' alt='worker working illustration'/></div>
            </div>
            <div className='link-shorten-body'>
                <div className='input-section'>
                    <input 
                    id='shorten-input'
                    placeholder='Shorten a link here...'
                    >
                    </input>
                    <button className='shorten-button'>Shorten It!</button>
                    <div className={`error-message ${error ? 'visible' : ''}`}>Please add a link</div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;