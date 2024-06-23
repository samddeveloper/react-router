import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Profiles, { profilesLoader } from './pages/profiles/Profiles'
import ProfileDetails from './pages/profiles/ProfileDetails'

//Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfilesLayout from './layouts/ProfilesLayout'

const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="profiles" element={<ProfilesLayout />}>
            <Route index element={<Profiles />} loader={profilesLoader} />
            <Route
                path=":id"
                element={<ProfileDetails />}
                // loader={profileDetailsLoader}
            />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Route>
)
const router = createBrowserRouter(routesFromElements)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
