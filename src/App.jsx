//import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";'
import HomePage from "./pages/HomePage";
import PastePage from "./pages/PastePage";
import {
    BrowserRouter,
    Routes,
    Route,
}from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";


const App =()=> {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/paste/:id" element={<PastePage/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        </BrowserRouter> <ToastContainer/>
        </>
    );
}

export default App;