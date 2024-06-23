import { Link, useLoaderData } from 'react-router-dom'

const Profiles = () => {
    const profiles = useLoaderData()
    console.log({ profiles })
    return (
        <div className="profiles">
            {profiles.map((profile) => {
                return (
                <Link className="profiles__links" to={profile.id.toString()} key={profiles.id}>
                <p>{profile.name}</p>
                <p className="profiles__station"> 
                    Jobbar på: {profile.company.name}
                </p>
                </Link>
                )
            })}
        </div>
    )
}

export const profilesLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}
export default Profiles
