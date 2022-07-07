import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './views/Home';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';
import Footer from './views/Footer';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/Home" element={
                    <Home />
                } />

                <Route path="/Skills" element={
                    <Skills />
                } />

                <Route path="/Portfolio" element={
                    <Portfolio />
                } />

                <Route path="Footer" element={
                    <Footer />
                } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;