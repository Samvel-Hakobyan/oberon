import React from 'react';
import { Helmet } from "react-helmet";
import List2 from "../components/List2";
import List3 from "../components/List3";
import Subscribe from "../components/Subscribe";
import List4 from "../components/List4";
import Wrapper from "../components/Wrapper";

function Home(props) {
    return (
        <div>
                <Helmet>
                    <meta charSet={"utf-8"} />
                    <title>Oberon - Webflow HTML website template</title>
                </Helmet>

            <Wrapper>
                    <div className="section wf-section">
                    <div className="content">
                <List2 />
                        <div className="space"></div>
                <List3 />
                        <div className="space"></div>
                <Subscribe />
                        <div className="space"></div>
                <List4 />
                    </div>
                </div>
            </Wrapper>

        </div>
    );
}

export default Home;