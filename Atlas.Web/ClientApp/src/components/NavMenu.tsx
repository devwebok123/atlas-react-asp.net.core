import * as React from 'react';
import { Container } from 'reactstrap';
import './NavMenu.css';

const logo =  require("../assets/images/atlas_white.svg");
const unicef =  require("../assets/images/unicef.png");
const mainmenu = {
    paddingTop: '39px',
    paddingBottom: '39px'
}

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    toggleCart = () => {
        let $topcart =  document.getElementById('top-cart');
        if($topcart) {
            if(!$topcart.classList.contains("top-cart-open")) {
                $topcart.classList.add("top-cart-open");
            } else {
                $topcart.classList.remove("top-cart-open");
            }
        }
    }

    public render() {
        return (
            <header id="header" className="full-header dark sticky-header sticky-header-shrink">
                <div id="header-wrap">
                    <Container>
                        <div className="header-row">
                            <div id="logo">
                                <a href="index.html" className="standard-logo">
                                    <img src={logo} alt="Atlas Assistance Platform" style={{height: "100px"}} />
                                </a>
                            </div>
                            <div className="header-misc">
                                <div id="top-cart" className="header-misc-icon d-none d-sm-block" onClick={this.toggleCart}>
                                    <span id="top-cart-trigger">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                        </svg>
                                        <span className="top-cart-number">5</span>
                                    </span>
                                    <div className="top-cart-content">
                                        <div className="top-cart-title">
                                            <h4>Notifications</h4>
                                        </div>
                                        <div className="top-cart-items">
                                            <div className="top-cart-item">
                                                <div className="top-cart-item-image">
                                                </div>
                                                <div className="top-cart-item-desc">
                                                    <div className="top-cart-item-desc-title">
                                                        Shooting
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="top-cart-action">
                                            <a href="/" className="button button-3d button-small m-0">View all notifications</a>
                                        </div>
                                    </div>
                                </div>
                                <img src={unicef} alt="Canvas unicef" style={{maxHeight: "80px", marginLeft: "20px"}} />
                            </div>
                            <div id="primary-menu-trigger">
                                <svg className="svg-trigger" viewBox="0 0 100 100">
                                    <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                                    <path d="m 30,50 h 40"></path>
                                    <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
                                </svg>
                            </div>
                            <div className="primary-menu">
                                <ul className="menu-container">
                                    <li className="menu-item mega-menu">
                                        <a className="menu-link mainmenu" href="/" style={mainmenu}>
                                            <div>Analysis</div>
                                        </a>
                                        <div className="mega-menu-content mega-menu-style-2">
                                            <div className="container">
                                                <div className="row">
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item mega-menu-title sub-menu">
                                                            <a className="menu-link" href="/">
                                                                <div>Lebanon for newcommers</div>
                                                            </a>
                                                            <ul className="sub-menu-container">
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Lebanon facts and figures</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Considerations before departure</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Checklist before departure</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Visas</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Arrival</div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item mega-menu-title sub-menu">
                                                            <a className="menu-link" href="/">
                                                                <div>Monthly Reports</div>
                                                            </a>
                                                            <ul className="sub-menu-container">
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>January 2021</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>December 2020</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>November 2020</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>October 2020</div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="sub-menu-container mega-menu-column col-lg-3">
                                                        <li className="menu-item mega-menu-title sub-menu">
                                                            <a className="menu-link" href="/">
                                                                <div>Monthly Reports</div>
                                                            </a>
                                                            <ul className="sub-menu-container">
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Archive</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Backgrounders</div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item mega-menu">
                                        <a className="menu-link mainmenu" href="/" style={mainmenu}>
                                            <div>Management</div>
                                        </a>
                                        <div className="mega-menu-content mega-menu-style-2">
                                            <div className="container">
                                                <div className="row">
                                                    <ul className="sub-menu-container mega-menu-column col">
                                                        <li className="menu-item mega-menu-title sub-menu">
                                                            <a className="menu-link" href="/">
                                                                <div>Annuncements</div>
                                                            </a>
                                                            <ul className="sub-menu-container">
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Past annoucnement</div>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a className="menu-link" href="/">
                                                                        <div>Send new announcement</div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="sub-menu-container mega-menu-column col">
                                                        <li className="menu-item mega-menu-title sub-menu">
                                                            <a className="menu-link" href="/">
                                                                <div>Mission management</div>
                                                            </a>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <ul className="sub-menu-container">
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Full mission management</div>
                                                                            </a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Activities</div>
                                                                            </a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Groups</div>
                                                                            </a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Staff</div>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <ul className="sub-menu-container">
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Sites</div>
                                                                            </a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Routes</div>
                                                                            </a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/vehicle">
                                                                                <div>Vehicles</div>
                                                                            </a>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <a className="menu-link" href="/">
                                                                                <div>Partners</div>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        );
    }
}
