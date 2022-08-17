import React from 'react';

export default function Footer(props) {
    return (
        <div>
            <div className="footer">
                <footer className="grid-footer">
                    <div id="w-node-af7177d4-a876-72d8-f1e2-a885b81feeb7-b81feeb5" className="block-footer"><img
                        src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e49bf24f9edb73ff0823ba_Logo.svg"
                        loading="lazy" alt="" className="logo-footer"/><a href="https://webflow.com/" target="_blank"
                                                                         className="small-link-footer">Powered by
                        Webflow</a></div>
                    <div className="block-footer-link"><a href="https://www.facebook.com/webflow/" target="_blank"
                                                          className="link-footer">Facebook</a><a
                        href="https://twitter.com/webflow" target="_blank" className="link-footer">Twitter</a><a
                        href="https://www.youtube.com/c/Webflow" target="_blank" className="link-footer">YouTube</a>
                    </div>
                    <div className="block-footer-link"><a href="/template-info/licensing"
                                                          className="link-footer">Licensing</a><a
                        href="/template-info/style-guide" className="link-footer">Style Guide</a><a
                        href="/template-info/changelog" className="link-footer">Changelog</a></div>
                </footer>
            </div>
        </div>
    );
}