import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'


const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element= {<Home />} />
        <Route path="about" element= {<About />} />
    </Route>
)
const router = createBrowserRouter();

function App() {
    return (
        <div className="App">
            <About />
        </div>
    )
}

export default App
