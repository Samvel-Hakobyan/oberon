import React from 'react';
import Wrapper from "../components/Wrapper";
import {Helmet} from "react-helmet";

function Contact(props) {
    return (
        <div>
            <Helmet>
                <meta charSet={"utf-8"} />
                <title>Contact - Webflow HTML website template</title>
            </Helmet>
            <Wrapper>

                <div className="section page wf-section">
                    <div className="content">
                        <div className="page-content">
                            <div className="page-block center"><h1 className="heading">Let’s see how we can help</h1><p
                                className="paragraph">Magna diam eget odio ac dictumst tellus rhoncus. Auctor sagittis
                                laoreet potenti elementum facilisis magnis.</p>
                                <div className="form-block w-form">
                                    <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form"
                                          method="get" className="form" aria-label="Contact Form">
                                        <input type="text"
                                                                                                         className="text-field w-input"
                                                                                                         maxLength="256"
                                                                                                         name="name"
                                                                                                         data-name="Name"
                                                                                                         placeholder="Name"
                                                                                                         id="name"/><input
                                        type="email" className="text-field w-input" maxLength="256" name="email"
                                        data-name="Email" placeholder="Email" id="email" required=""/><textarea
                                        placeholder="Message" maxLength="5000" id="Message" name="Message"
                                        data-name="field"
                                        className="textarea w-node-_9f9106bc-e570-657d-f183-8e4c2bb5f8f9-2824152f w-input"></textarea><input
                                        type="submit" value="Submit" data-wait="Please wait..."
                                        className="submit-button w-button"/></form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Contact;