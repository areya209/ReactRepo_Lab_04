import { useParams, Link } from "react-router-dom";
import { users } from "./Users/users";

export const UserDetails = () => {
    const { id } = useParams();
    const user = users.find((us) => us.id === +id);
    return (
        <>
            <h2>Welcome to {user.name}</h2>
            <p>UserName: {user.username}</p>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>ZipCode: {user.address.zipcode}</p>
            <p>Geo_Lat: {user.address.geo.lat}</p>
            <p>Geo_Lng: {user.address.geo.lng}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company_Name: {user.company.name}</p>
            <p>Company_CatchPhrase: {user.company.catchPhrase}</p>
            <p>Company_BS: {user.company.bs}</p>

            <Link to="/users">Back To Users</Link>
        </>
    );
};
