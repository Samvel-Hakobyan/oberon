import React from 'react';
import Wrapper from "../components/Wrapper";
import Subscribe from "../components/Subscribe"
import {Helmet} from "react-helmet";
function About(props) {
    return (
        <div>
            <Helmet>
                <meta charSet={"utf-8"} />
                <title>About - Webflow HTML website template</title>
            </Helmet>
            <Wrapper>
                <div className="section page wf-section">
                    <div className="content">
                        <div className="page-content">
                            <div className="page-block"><h1 className="heading margin">Welcome to <em>Oberon Blog</em>.
                                We’re glad and grateful you’re here.</h1>
                                <div className="rich-text-block w-richtext"><p>Magna diam eget odio ac dictumst tellus
                                    rhoncus. Auctor sagittis laoreet potenti elementum facilisis magnis lectus. Ornare
                                    mauris blandit elit ut gravida nunc pellentesque. Lectus enim ornare in euismod
                                    hendrerit eget elit eget proin. Enim tincidunt vitae lorem habitasse velit odio
                                    egestas. Ac leo arcu aliquam dolor ut ipsum nunc diam. <br /><br />Ultricies convallis
                                        nam euismod ut mi sagittis suscipit pellentesque nunc. Orci condimentum feugiat
                                        velit faucibus justo, arcu. Vitae augue id nec hendrerit auctor nunc sit.
                                        Gravida velit, aliquet phasellus lectus mauris. Sed maecenas sagittis urna massa
                                        ut in donec.<br /></p></div>
                            </div>
                            <div className="w-layout-grid grid-image">
                                <img
                                srcSet={"https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f07baffc27b5932f3d5_About_1.jpg"}
                                loading="lazy" id="w-node-f45c3940-701b-db85-9ccd-1ef0904272f3-2dcbae0d"
                                sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw"
                                srcSet={"https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f07baffc27b5932f3d5_About_1-p-500.jpeg 500w, https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f07baffc27b5932f3d5_About_1.jpg 712w"}
                                alt="" className="image-about"/><img
                                srcSet={"https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f0789a6b7400263a289_About_2.jpg"}
                                loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw"
                                srcSet={"https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f0789a6b7400263a289_About_2-p-500.jpeg 500w, https://assets.website-files.com/61e343b8f87fb4d287394d48/61eb6f0789a6b7400263a289_About_2.jpg 711w"}
                                alt="" className="image-about"/></div>
                            <div className="page-block">
                                <div className="rich-text-block w-richtext"><h3>Our story</h3><p>Nibh purus massa neque
                                    diam feugiat sollicitudin. Aliquam imperdiet justo amet sed ullamcorper. Ipsum,
                                    dignissim enim non, luctus pellentesque eget. Euismod vulputate commodo molestie
                                    consequat velit. Neque, sagittis, bibendum sed eleifend.</p>

                                    <blockquote>Mus faucibus mi lorem consectetur. Dui, aliquam in eget sem et fusce
                                        semper. Sed elementum sit lobortis hendrerit vel. Mauris dignissim consequat
                                        aliquet sed egestas consequat.
                                    </blockquote>
                                    <p>Mus faucibus mi lorem consectetur. Dui, aliquam in eget sem et fusce semper. Sed
                                        elementum sit lobortis hendrerit vel. Mauris dignissim consequat aliquet sed
                                        egestas consequat. Risus congue urna vulputate sed lorem fringilla molestie.
                                        Mauris platea amet ultricies ultrices felis ut fringilla. A hac id id aenean sit
                                        vivamus. Nibh sem mauris lectus pharetra volutpat non sed a. Vitae, vestibulum,
                                        facilisis nulla morbi. Metus non aenean.<br /></p></div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <Subscribe />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default About;