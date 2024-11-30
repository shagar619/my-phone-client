/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {

    const phones = useLoaderData()

    return (
        <div>
            <h2>All phones is here! {phones.length}</h2>
            {
                phones.map(phone => 
                <li><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;