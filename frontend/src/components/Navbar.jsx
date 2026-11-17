import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) => 
            currentTheme === "dark" ? "light" : "dark"
        );
    }

    const [isSprintOpen, setIsSprintOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src="/logo.png" alt="Skill Up Logo" />
            </Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <div
                    className="navbar-dropdown"
                    onMouseEnter={() => setIsSprintOpen(true)}
                    onMouseLeave={() => setIsSprintOpen(false)}
                >
                    <button
                        className="dropdown-button"
                        onClick={() => setIsSprintOpen(!isSprintOpen)}
                    >
                        Sprints ▾
                    </button>

                    {isSprintOpen && (
                        <div className="dropdown-menu">
                            <Link to="/sprint-1">Sprint 1</Link>
                            <Link to="/sprint-2">Sprint 2</Link>
                            <Link to="/sprint-3">Sprint 3</Link>
                            <Link to="/sprint-4">Sprint 4</Link>
                            <Link to="/sprint-5">Sprint 5</Link>
                        </div>
                    )}
                </div>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle light and dark mode"
                >
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;