import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
           
            <div className="home">
                <Link className="home-link" to='/zodiacsms'>ZodicSMS</Link>
            </div>
        </>
    )
}

export default Home