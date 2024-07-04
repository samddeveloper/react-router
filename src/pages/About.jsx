import personImage from '../Assets/person.jpg'; // Importera person.jpg
import '../index.css'; // Importera din CSS-fil

export default function About() {
    return (
        <div className="about-me-container">
            <div className="about-me-image">
                <img src={personImage} alt="Person" />
            </div>
            <div className="about-me-text">
                <h1>Min Bakgrund</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo ut sem feugiat, at tempor nisl pulvinar. Ut ac volutpat nisl. Cras sit amet dui non urna sodales dictum a eget urna. Duis vel felis eu nunc interdum accumsan. Nam volutpat, risus vel tincidunt congue, eros odio facilisis magna, ut interdum elit nulla non nisi. Integer vel justo ut ex iaculis sollicitudin. Aenean quis fermentum nulla. Sed venenatis felis ut sapien condimentum, id tristique metus vestibulum.
                </p>
            </div>
        </div>
    );
}
