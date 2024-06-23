import { useLoaderData, useParams, Link } from "react-router-dom";

const ProfileDetails = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <h1>{id}</h1>
    )
}

export default ProfileDetails;