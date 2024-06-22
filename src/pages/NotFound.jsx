import { Link,  } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>404 error - Vi kunde inte hitta sidan!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ipsa voluptate, soluta doloremque earum deleniti
                repellat perferendis tempore eveniet natus!
            </p>
            <p>
                Gå tillbaka till <Link to="/">Hemsidan</Link>
            </p>
        </div>
    )
}

export default NotFound
