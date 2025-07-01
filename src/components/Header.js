import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import './Header.css';

const Header = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(query.trim()){
            navigate(`/search/${query}`)
            setQuery("");
        }
    }

    return(
        <header className="header">
                <Link to="/" className="logo">MyApp</Link>
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
            <nav className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;