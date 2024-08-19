import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div className="notFound">
            <p>The page that you are looking for does not exist.</p>
            <Link to='/' className='homeLink'>
            Click here to go back to the home page
            </Link>
        </div>
    )
}