import { Outlet, NavLink, Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img
                        src={logo}
                        alt="Synergy Development"
                        className="logo"
                    />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="about">
                            Om oss
                        </NavLink>
                        <NavLink className="nav-link" to="help">
                            Hjälp
                        </NavLink>
                        <NavLink className="nav-link" to="profiles">
                            Profiles
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
