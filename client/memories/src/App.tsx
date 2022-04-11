import React from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";

export default function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<AboutPage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}