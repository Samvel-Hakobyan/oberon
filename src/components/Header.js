import React, {Component} from 'react';

class Header extends Component {
    container = React.createRef();
    state = {
        open: false,
    };

    handleButtonClick = () => {

        this.setState((state) => {
            return {

                open: !state.open,
            };
        });
    };
    handleClickOutside = (event) => {
        if (
            this.container.current &&
            !this.container.current.contains(event.target)
        ) {

            this.setState({
                open: false,
            });
        }
    };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }


    render() {
        function a(){
            if (this.state.open){
                document.getElementById("open").style.display = "none";
            }
        }
        window.onscroll = () => {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                document.getElementById("header-logo").style.height = "40px";
                document.getElementById("grid").style.height = "80px";
                document.getElementById("grid").style.borderBottom = "1px solid #e4e4e4";
            } else {
                document.getElementById("header-logo").style.height = "90px";
                document.getElementById("grid").style.height = "210px";
                document.getElementById("grid").style.borderBottom = "0px solid #e4e4e4";
            }
        }

        return (
            <div>

                <div className="navbar w-nav">
                    <div className="w-layout-grid navbar-grid" id="grid">
                        <div className="nav-left">
                              <div className="menu-button w-nav-button" aria-label="menu"
                                 role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                                 aria-expanded="false">
                                <img
                                    src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e4ea9c83acd6779728fb13_Menu.svg"
                                    loading="eager" alt="" className="menu-icon" id="open"/>
                                <img
                                    src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e4ea9cbf88d53a6b7bc7b7_Close.svg"
                                    loading="eager" alt="" className="close-icon" id="close"/>


                                <div className="menu-button-text" onClick={this.handleButtonClick}>Menu</div>
                                  {this.state.open  && (
                                    <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0">
                                        <nav role="navigation" className="nav-menu w-nav-menu" data-nav-menu-open="">
                                            <div className="w-layout-grid menu-grid">
                                                <div className="menu-block first">
                                                    <div id="w-node-_30c87c6b-e5ea-20bb-4e1a-93a6ca90acb0-ca90ac9f"
                                                         className="menu-text">Page
                                                    </div>
                                                    <a href="/" className="nav-link">Home</a><a href="/contact"
                                                                                                className="nav-link">Contact</a><a
                                                    href="/about" className="nav-link">About</a></div>
                                                <div className="menu-block">
                                                    <div id="w-node-_30c87c6b-e5ea-20bb-4e1a-93a6ca90acb9-ca90ac9f"
                                                         className="menu-text">Template Info
                                                    </div>
                                                    <a href="/template-info/licensing"
                                                       className="nav-link">Licensing</a><a
                                                    href="/template-info/style-guide" className="nav-link">Style
                                                    Guide</a><a href="/template-info/changelog"
                                                                className="nav-link">Changelog</a></div>
                                                <div className="menu-block">
                                                    <div id="w-node-_30c87c6b-e5ea-20bb-4e1a-93a6ca90acc2-ca90ac9f"
                                                         className="menu-text">Social
                                                    </div>
                                                    <a href="https://www.facebook.com/webflow/" target="_blank"
                                                       className="nav-link">Facebook</a><a
                                                    href="https://twitter.com/webflow" target="_blank"
                                                    className="nav-link">Twitter</a><a
                                                    href="https://www.youtube.com/c/Webflow" target="_blank"
                                                    className="nav-link">YouTube</a></div>
                                            </div>
                                        </nav>
                                    </div>

                                      )}
                            </div>


                        </div>
                        <div className="nav-center">
                            <a href="/" id="w-node-_30c87c6b-e5ea-20bb-4e1a-93a6ca90aca7-ca90ac9f"
                               className="brand w-nav-brand"
                               aria-label="home"><img
                                src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e49bf24f9edb73ff0823ba_Logo.svg"
                                loading="eager" alt="" id="header-logo" className="logo"/></a>

                        </div>
                        <div className="nav-right">
                            <form action="/search" id="w-node-_30c87c6b-e5ea-20bb-4e1a-93a6ca90acaa-ca90ac9f"
                                  className="search w-form">
                                <input type="search" className="search-nav-input w-input"
                                       maxLength="256" name="query" placeholder="Search"
                                       id="search" required=""
                                />
                                <input type="submit" value=""
                                       className="search-icon-button w-button"
                                />
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Header;