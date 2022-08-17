import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function Wrapper(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}