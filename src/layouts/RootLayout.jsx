import { Outlet, NavLink } from 'react-router-dom';
import navLogo from '../Assets/reikimaster.png';

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img 
                        src={navLogo}
                        alt="Cesar Lopez"
                        className="nav-logo"
                    />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="/services">
                            Tjänster
                        </NavLink>
                        <NavLink className="nav-link" to="/about">
                            Om mig
                        </NavLink>
                        <NavLink className="nav-link" to="/help">
                            Hjälp
                        </NavLink>
                        
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
