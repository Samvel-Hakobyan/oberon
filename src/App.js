import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Licensing from "./pages/Licensing";
import Style from "./pages/Style";
import Changelong from "./pages/Changelong";
import Post from "./posts/Post";

export default function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/contact'} element={<Contact />}/>
                    <Route path={'/about'} element={<About />}/>
                    <Route path={'/template-info/licensing'} element={<Licensing />}/>
                    <Route path={'/template-info/style-guide'} element={<Style />}/>
                    <Route path={'/template-info/changelog'} element={<Changelong />}/>
                    <Route path={'/post/the-next-7-things-to-immediately-do-about-car'} element={<Post />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

