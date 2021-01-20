import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <div className="topnav">
            <a className="logo" href="/">Indo-European Languages</a>
            <div className="search-container">
                <form>
                    <Link smooth to="#add-branch">Add Branches</Link>
                    <input type="text" placeholder="Search..." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    );
}

export default Header;