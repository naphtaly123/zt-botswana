import logo1 from '../assets/bpc-logo.jpg';
import logo2 from '../assets/mva-logo.png';
import logo3 from '../assets/pnp-logo.png';
import logo4 from '../assets/zt-sa-logo.png';
import logo5 from '../assets/wuc-logo.png';
import logo6 from '../assets/botswana oil.jpeg';

import logo7 from '../assets/bpc-logo.jpg';
import logo8 from '../assets/mva-logo.png';
import logo9 from '../assets/pnp-logo.png';
import logo10 from '../assets/zt-sa-logo.png';
import logo11 from '../assets/wuc-logo.png';
import logo12 from '../assets/botswana oil.jpeg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6 ,logo7,logo8, logo9, logo10, logo11, logo12]; // Add your logos here

const LogoSlider = () => {
    return (
        <div className="overflow-hidden py-7">
            <h1 className='text-center text-lg mt-2 py-6'>OUR CLIENTS</h1>
            <div className="flex animate-loop-scroll hover:paused">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-4 w-70 px-3">
                        <img src={logo} alt={`Logo ${index + 1}`} className="h-16" />
                    </div>
                ))}
                {/* Duplicate set of logos for continuous effect */}
                {logos.map((logo, index) => (
                    <div key={index + logos.length} className="flex-shrink-0 mx-4 w-70 px-3">
                        <img src={logo} alt={`Logo ${index + 1}`} className="h-16" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;