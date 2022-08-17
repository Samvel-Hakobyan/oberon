import React from 'react';
import Wrapper from "../components/Wrapper";
import {Helmet} from "react-helmet";

function Licensing(props) {
    return (
        <div>
            <Helmet>
                <meta charSet={"utf-8"} />
                <title>Licensing - Webflow HTML website template</title>
            </Helmet>
            <Wrapper>
            <div className="section page wf-section">
                <div className="content">
                    <div className="top-block"><h1 className="heading">Licensing</h1><p className="paragraph">All
                        graphical assets in this template are licensed for personal and commercial use. If you’d like to
                        use a specific asset, please check the license below</p></div>
                    <div className="page-block template"><h3>Photography</h3><p>Photography is sourced from <a
                        href="https://unsplash.com/" target="_blank" className="link">Unsplash</a> — <a
                        href="https://unsplash.com/license" target="_blank" className="link">Unsplash License</a></p>
                        <div className="w-layout-grid grid-licensing"><img
                            src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e747fe2055c40e3df81652_Subscribe.jpg"
                            loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 991px) 92vw, 780px"
                            srcSet="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e747fe2055c40e3df81652_Subscribe-p-500.jpeg 500w, https://assets.website-files.com/61e343b8f87fb4d287394d48/61e747fe2055c40e3df81652_Subscribe.jpg 1420w"
                            alt="" className="licensing"/><img
                            src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f0789a6b7400263a289_About_2.jpg"
                            loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 991px) 92vw, 780px"
                            srcSet="https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f0789a6b7400263a289_About_2-p-500.jpeg 500w, https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f0789a6b7400263a289_About_2.jpg 711w"
                            alt="" className="licensing"/><img
                            src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f07baffc27b5932f3d5_About_1.jpg"
                            loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 991px) 92vw, 780px"
                            srcSet={"https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f07baffc27b5932f3d5_About_1-p-500.jpeg 500w, https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f07baffc27b5932f3d5_About_1.jpg 712w"}
                            alt="" className="licensing"/></div>
                        <div className="space"></div>
                        <h3>Fonts</h3><p>Fonts is sourced from Google Fonts: <a
                            href="https://fonts.google.com/specimen/Manrope?query=Manrope" target="_blank"
                            className="link">Manrope</a>, <a
                            href="https://fonts.google.com/specimen/Playfair+Display?query=Playfair+Display"
                            target="_blank" className="link">Playfair Display</a></p>
                        <div className="template-info"><h4 className="manrope">Manrope</h4></div>
                        <div className="template-info"><h4 className="playfair-display">Playfair Display</h4></div>
                    </div>
                </div>
            </div>
            </Wrapper>
        </div>
    );
}

export default Licensing;