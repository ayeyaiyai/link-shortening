import '../styles/Statistics.css';
import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';

function Statistics() {
    return(
        <div className='statistics-container'>
            <div className='statistics-title'>Advanced Statistics</div>
            <div className='statistics-subtitle'>Track how your links are performing across the web with our advanced statistics dashboard.</div>
            <div className='statistics-row'>
                <div className='teal-line'></div>
                <div className='statistics-block'>
                    <div className='block-image-container'>
                        <img src={brandRecognition} className='block-image' alt='brand recognition icon'/>
                    </div>
                    <div className='block-title'>Brand Recognition</div>
                    <div className='block-subtitle'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill a confidence in your content.</div>
                </div>
                <div className='statistics-block' id='block-two'>
                    <div className='block-image-container'>
                        <img src={detailedRecords} className='block-image' alt='detailed records icon'/>
                    </div>
                    <div className='block-title'>Detailed Records</div>
                    <div className='block-subtitle'>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</div>
                </div>
                <div className='statistics-block' id='block-three'>
                    <div className='block-image-container'>
                        <img src={fullyCustomizable} className='block-image' alt='fully customizable icon'/>
                    </div>
                    <div className='block-title'>Fully Customizable</div>
                    <div className='block-subtitle'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;