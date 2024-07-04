import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Services from './pages/Services'; // Importera den nya komponenten
import ProfilesError from './pages/profiles/ProfilesError';
import BookingPage from './pages/BookingPage'; 

// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="services" element={<Services />} /> {/* Lägg till tjänstesidan */}
        <Route path="book" element={<BookingPage />} />
        <Route path="*" element={<NotFound />} />
    </Route>
);
const router = createBrowserRouter(routesFromElements);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
