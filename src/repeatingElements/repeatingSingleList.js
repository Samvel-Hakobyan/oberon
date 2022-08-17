import React from 'react';
import Wrapper from "../components/Wrapper";
import {Helmet} from "react-helmet";

function RepeatingSingleList(props) {
    return (
        <div>
            <Wrapper>
                <Helmet>
                    <meta charSet={"utf-8"} />
                    <title>{props.data.heading}</title>
                </Helmet>
                <div className="section page wf-section">
                    <div className="content-wide"><img
                        src={props.data.img}
                        loading="lazy" alt="The next 7 things to immediately do about car" className="main-image"/></div>
                    <div className="content">
                        <div className="post-heading-block">
                            <div className="post-info"><a href="/category/life-style" className="link-category">{props.data.category}</a>
                                <div className="date">Jan 16, 2022</div>
                            </div>
                            <h1 className="heading">{props.data.heading}</h1></div>
                        <div className="rich-text-block w-richtext"><p>Magna diam eget odio ac dictumst tellus rhoncus.
                            Auctor sagittis laoreet potenti elementum facilisis magnis lectus. Ornare mauris blandit
                            elit ut gravida nunc pellentesque. Lectus enim ornare in euismod hendrerit eget elit eget
                            proin. Enim tincidunt vitae lorem habitasse velit odio egestas. Ac leo arcu aliquam dolor ut
                            ipsum nunc diam. </p><p>Ultricies convallis nam euismod ut mi sagittis suscipit pellentesque
                            nunc. Orci condimentum feugiat velit faucibus justo, arcu. Vitae augue id nec hendrerit
                            auctor nunc sit. Gravida velit, aliquet phasellus lectus mauris. Sed maecenas sagittis urna
                            massa ut in donec.</p><h3>Enim pharetra commodo dictum</h3><p>Nibh purus massa neque diam
                            feugiat sollicitudin. Aliquam imperdiet justo amet sed ullamcorper. Ipsum, dignissim enim
                            non, luctus pellentesque eget. Euismod vulputate commodo molestie consequat velit. Neque,
                            sagittis, bibendum sed eleifend.</p>
                            <blockquote>Mus faucibus mi lorem consectetur. Dui, aliquam in eget sem et fusce semper. Sed
                                elementum sit lobortis hendrerit vel. Mauris dignissim consequat aliquet sed egestas
                                consequat.
                            </blockquote>
                            <p>Mus faucibus mi lorem consectetur. Dui, aliquam in eget sem et fusce semper. Sed
                                elementum sit lobortis hendrerit vel. Mauris dignissim consequat aliquet sed egestas
                                consequat. Risus congue urna vulputate sed lorem fringilla molestie. Mauris platea amet
                                ultricies ultrices felis ut fringilla. A hac id id aenean sit vivamus. Nibh sem mauris
                                lectus pharetra volutpat non sed a. Vitae, vestibulum, facilisis nulla morbi. Metus non
                                aenean.<br /></p></div>
                        <div className="rich-text-block wide w-richtext">
                            <figure // style="max-width:1555pxpx"
                                    className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                <div><img
                                    style={{width: "100%"}}
                                    src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a591f83977997a06f3af_post.jpg"
                                    loading="lazy" alt=""/></div>
                            </figure>
                        </div>
                        <div className="rich-text-block w-richtext"><h3>Sagittis lacus vitae cursus purus quis</h3>
                            <p>Congue eu tellus et viverra purus bibendum. Porttitor eget tellus risus nisi netus. Donec
                                sed lobortis dolor, fusce egestas facilisis. Adipiscing in turpis facilisi sit. Massa
                                proin ultrices sed consectetur tincidunt pellentesque tincidunt enim.</p>
                            <ul role="list">
                                <li>Sit nibh adipiscing tellus eget vestibulum nunc duis.</li>
                                <li>Leo aliquam at feugiat nunc morbi lectus.</li>
                                <li>Ultrices dictum elit, sapien, elit. Lacinia leo libero varius.</li>
                                <li>Mauris, enim nisl varius cursus varius felis.</li>
                            </ul>
                            <p>Magna diam eget odio ac dictumst tellus rhoncus. Auctor sagittis laoreet potenti
                                elementum facilisis magnis lectus. Ornare mauris blandit elit ut gravida nunc
                                pellentesque. Lectus enim ornare in euismod hendrerit eget elit eget proin. Enim
                                tincidunt vitae lorem habitasse velit odio egestas. Ac leo arcu aliquam dolor ut
                                ipsum</p><h3>Natoque nulla tempor leo dignissim</h3><p>Proin facilisi arcu ultrices
                                scelerisque fringilla nec ac. Viverra ligula gravida urna, nunc auctor. Vel suspendisse
                                mi phasellus malesuada. Cursus turpis sem nulla convallis dictum maecenas morbi. Morbi
                                adipiscing luctus ultrices cursus amet tempor sed tristique vivamus.</p><p>Tempus et
                                diam cursus aenean libero, sed. Tempor tempor mi integer amet, diam egestas risus proin.
                                Vestibulum auctor diam ultrices turpis aenean eget egestas. Ultricies varius integer
                                volutpat auctor adipiscing sollicitudin.</p></div>
                        <div className="tags-block">
                            <div className="collection-list-wrapper w-dyn-list">
                                <div role="list" className="collection-list w-dyn-items">
                                    <div role="listitem" className="collection-item---tag w-dyn-item"><a
                                        href="/tags/life-// style" className="tag">Life // style</a></div>
                                    <div role="listitem" className="collection-item---tag w-dyn-item"><a
                                        href="/tags/car" className="tag">Car</a></div>
                                    <div role="listitem" className="collection-item---tag w-dyn-item"><a
                                        href="/tags/useful-tips" className="tag">Useful Tips</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="collection-list-wrapper  w-dyn-list">
                            <div role="list" className="collection-list---3a asdfg w-dyn-items">
                                <div role="listitem" className="collection-item w-dyn-item" style={{widht: "385px"}}><a
                                    data-w-id="18752edf-25ae-6de1-b7c9-89136fb64f2b"
                                    style={{backgroundImage: "url(https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a29c142f0ce761c4171c_thumbnail_2.jpg)"}}
                                    href="/post/7-best-online-interior-design-services-of-2022"
                                    className="link-post _230px-margin w-inline-block"></a>
                                    <div className="post-text">
                                        <div className="post-info"><a href="/category/interior"
                                                                      className="link-category">Interior</a>
                                            <div className="date">Jan 16, 2022</div>
                                        </div>
                                        <a href="/post/7-best-online-interior-design-services-of-2022"
                                           className="link-post-heading w-inline-block"><h5 className="post-heading">7
                                            Best online interior design services of 2022</h5></a></div>
                                </div>
                                <div role="listitem" className="collection-item w-dyn-item" style={{width: "385px"}}><a
                                    data-w-id="18752edf-25ae-6de1-b7c9-89136fb64f2b"
                                     style={{backgroundImage: "url(https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a2d48e376a30a65011c7_thumbnail_3.jpg)"}}
                                    href="/post/brilliant-documentaries-and-books-about-animation"
                                    className="link-post _230px-margin w-inline-block"></a>
                                    <div className="post-text">
                                        <div className="post-info"><a href="/category/design"
                                                                      className="link-category">Design</a>
                                            <div className="date">Jan 16, 2022</div>
                                        </div>
                                        <a href="/post/brilliant-documentaries-and-books-about-animation"
                                           className="link-post-heading w-inline-block"><h5
                                            className="post-heading">Brilliant documentaries and books about
                                            animation</h5></a></div>
                                </div>
                                <div role="listitem" className="collection-item w-dyn-item" style={{width: "385px"}} ><a
                                    data-w-id="18752edf-25ae-6de1-b7c9-89136fb64f2b"
                                     style={{backgroundImage: "url(https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a30e946f058a92d26451_thumbnail_4.jpg)"}}
                                    href="/post/believe-in-your-car-skills-but-never-stop-improving"
                                    className="link-post _230px-margin w-inline-block"></a>
                                    <div className="post-text">
                                        <div className="post-info"><a href="/category/life-// style"
                                                                      className="link-category">Life style</a>
                                            <div className="date">Jan 16, 2022</div>
                                        </div>
                                        <a href="/post/believe-in-your-car-skills-but-never-stop-improving"
                                           className="link-post-heading w-inline-block"><h5
                                            className="post-heading">Believe in your car skills but never stop
                                            improving</h5></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default RepeatingSingleList;