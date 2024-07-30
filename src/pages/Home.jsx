import '../index.css';
import { Link } from 'react-router-dom';
import heroImage from '../Assets/hero.jpg';


export default function Home() {
    return (
        <div className="page-container">
            <div className="nature">
                <div className="title-container">
                    <h1 className="home-title">
                        Avslappnande, Helande
                    </h1>
                    <p className="home-text">
                        REIKITERAPEUTISK BEHANDLING
                    </p>
                    <div className="button-container">
                        <Link to="/services">
                            <button className="services-button">Se tjänster</button>
                        </Link>
                        <Link to="/book">
                            <button className="services-button">Boka nu</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="about-section">
                <div className="about-content">
                    <div className="hero-image">
                        <img src={heroImage} alt="Lisa Edin" className="profile-image" />
                    </div>
                    <div className="about-text">
                        <h2>Om</h2>
                        <h4>Cesar Lopez, Certifierad Reiki Master</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam omnis molestiae inventore error? Beatae suscipit quia optio mollitia illo?
                        </p>
                        <Link to="/about">
                            <button className="services-button">Läs mer</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
