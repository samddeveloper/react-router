import '../index.css' // Se till att importera CSS-filen
import { Link } from 'react-router-dom'; // Lägg till denna rad för att använda Link
import heroImage from '../Assets/hero.jpg'; // Importera bilden korrekt

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
                    <Link to="/profiles">
                        <button className="services-button">Se tjänster</button>
                    </Link>
                </div>
            </div>
            
            {/* Om sektion */}
            <div className="about-section">
                <div className="about-content">
                    <div className="hero-image">
                        <img src={heroImage} alt="Lisa Edin" className="profile-image" />
                    </div>
                    <div className="about-text">
                        <h2>Om</h2>
                        <h4>Cesar Lopez, Certifierad Reiki Master </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam omnis molestiae inventore error? Beatae suscipit quia optio mollitia illo?
                        </p>
                    </div>
                </div>
            </div>
            
            {/* <img
                src={logo}
                alt="Cesar Lopez"
                className="logo"
            /> */}
            {/* <p>
                Välkommen till vår hemsida som är dedikerad till att främja välbefinnande och hälsa genom Reiki-behandlingar. Vårt mål är att göra processen att hitta och boka Reiki-behandlingar så enkel och tillgänglig som möjligt, så att individer kan fokusera på sin personliga utveckling och välbefinnande.
            </p>
            <p>
                Vår hemsida är en plattform där individer kan utforska olika Reiki-behandlare och deras tjänster. Vi arbetar med att samla kvalificerade och erfarna Reiki-behandlare från hela världen som är passionerade om att hjälpa andra att uppnå balans och harmoni. Genom att använda vår sökfunktion kan kunder hitta rätt behandlare baserat på deras erfarenhet, specialiseringar och kundomdömen.
            </p>
            <p>
                Vi strävar efter att göra processen att boka behandlingar så smidig som möjligt. Genom att skapa en användarprofil kan kunder enkelt boka sessioner, följa sina bokningshistorik och få rekommendationer anpassade efter deras behov. Kunder kan också ställa in specifika preferenser och få notifikationer när nya sessioner eller specialerbjudanden blir tillgängliga.
            </p> */}
        </div>
    )
}
