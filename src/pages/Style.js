import React from 'react';
import Wrapper from "../components/Wrapper";
import {Helmet} from "react-helmet";

function Style(props) {
    return (
        <div>
            <Helmet>
                <meta charSet={"utf-8"} />
                <title>Style Guid - Webflow HTML website template</title>
            </Helmet>
            <Wrapper>
                <div className="section page wf-section">
                    <div className="content">
                        <div className="top-block"><h1 className="heading">Style Guide</h1></div>
                        <div className="page-block template"><h3>Typography</h3><p>Magna diam eget odio ac dictumst
                            tellus rhoncus. Auctor sagittis laoreet potenti elementum facilisis magnis lectus. Ornare
                            mauris blandit elit ut gravida nunc pellentesque. Lectus enim ornare in euismod hendrerit
                            eget elit eget proin. <br /><br /><a href="#" className="link">Paragraph Links</a> — <strong>Bold
                                Text</strong> — <em>Italic Text</em><br /><br />Ultricies convallis nam euismod ut mi
                                sagittis suscipit pellentesque nunc. Orci condimentum feugiat velit faucibus justo,
                                arcu. Vitae augue id nec hendrerit.</p>
                            <ul role="list">
                                <li>Sit nibh adipiscing tellus eget vestibulum nunc duis.</li>
                                <li>Leo aliquam at feugiat nunc morbi lectus.</li>
                                <li>Ultrices dictum elit, sapien, elit. Lacinia leo libero varius.</li>
                            </ul>
                            <ol role="list">
                                <li>Sit nibh adipiscing tellus eget vestibulum nunc duis.</li>
                                <li>Leo aliquam at feugiat nunc morbi lectus.</li>
                                <li>Ultrices dictum elit, sapien, elit. Lacinia leo libero varius.</li>
                            </ol>
                            <p>Nibh purus massa neque diam feugiat sollicitudin. Aliquam imperdiet justo amet sed
                                ullamcorper. Ipsum, dignissim enim non, luctus pellentesque eget. Euismod vulputate
                                commodo molestie consequat velit. Neque, sagittis, bibendum sed eleifend.</p>
                            <blockquote>Mus faucibus mi lorem consectetur. Dui, aliquam in eget sem et fusce semper. Sed
                                elementum sit lobortis hendrerit vel. Mauris dignissim consequat aliquet sed egestas
                                consequat.
                            </blockquote>
                            <div className="rich-text-block w-richtext"><p>Mus faucibus mi lorem consectetur. Dui,
                                aliquam in eget sem et fusce semper. Sed elementum sit lobortis hendrerit vel. Mauris
                                dignissim consequat aliquet.</p>
                                <figure style={{maxWidth:"1555px"}}
                                        className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                    <div><img
                                        style={{width: "100%"}}
                                        src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61ecbc9468108dde7a7d4b07_post.jpg"
                                        loading="lazy" alt=""/></div>
                                    <figcaption>Nibh purus massa neque diam feugiat sollicitudin.</figcaption>
                                </figure>
                                <p>Nibh purus massa neque diam feugiat sollicitudin. Aliquam imperdiet justo amet sed
                                    ullamcorper. Ipsum, dignissim enim non, luctus pellentesque eget. Euismod vulputate
                                    commodo molestie consequat velit. Neque, sagittis, bibendum sed eleifend.<br /></p>
                            </div>
                            <h1>Heading H1</h1><h2>Heading H2</h2><h3>Heading H3</h3><h4>Heading H4</h4><h5>Heading
                                H5</h5><h6>Heading H6</h6>
                            <div className="space"></div>
                            <h3>Colors</h3>
                            <div className="w-layout-grid grid-colors">
                                <div id="w-node-b749cc25-3621-3fd4-7f6f-dc5af8c9b3bf-240b0fab" className="block-color">
                                    <div className="text-color">White</div>
                                    <div className="hex-color">#FFFFFF</div>
                                </div>
                                <div className="block-color border">
                                    <div className="text-color">Border</div>
                                    <div className="hex-color">#E4E4E4</div>
                                </div>
                                <div className="block-color paragraphs">
                                    <div className="text-color white">Paragraphs</div>
                                    <div className="hex-color white">#555555</div>
                                </div>
                                <div className="block-color black">
                                    <div className="text-color white">Black</div>
                                    <div className="hex-color white">#000000</div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <h3>Buttons</h3>
                            <div className="template-info"><a href="#" className="button w-button">Button Text</a></div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Style;