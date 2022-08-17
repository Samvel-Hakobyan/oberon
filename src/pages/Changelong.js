import React from 'react';
import Wrapper from "../components/Wrapper";
import {Helmet} from "react-helmet";

function Changelong(props) {
    return (
        <div>
            <Helmet>
                <meta charSet={"utf-8"} />
                <title>Changelong - Webflow HTML website template</title>
            </Helmet>
            <Wrapper>
                <div className="section page wf-section">
                    <div className="content">
                        <div className="top-block"><h1 className="heading">Changelog</h1></div>
                        <div className="page-block template"><h2>Version 1.0</h2><p><strong>February 15,
                            2022</strong><br />The template has been released!</p></div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Changelong;