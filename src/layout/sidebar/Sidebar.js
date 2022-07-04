import React, { useState } from 'react';
import { Link } from "react-router-dom";
import favicon from '../../assets/icons/favicon.ico';
import pieChart from '../../assets/icons/pieChart.png';
import imageIcon from '../../assets/icons/imageIcon.png';
import molecule from '../../assets/icons/molecule.png';
import forms from '../../assets/icons/forms.png';
import puzzle from '../../assets/icons/puzzle.png';
import pin from '../../assets/icons/pin.png';
import settings from '../../assets/icons/settings.png';
import barChart from '../../assets/icons/barChart.png';
import alarm from '../../assets/icons/alarm.png';
import './Sidebar.css';

function Sidebar() {

    const [pageDetails, setPageDetails] = useState(false);

    return (
        <div className="sidebar-component">
            <div className="sidebar-wrapper">
                <div className="sidebar-head-wrapper">
                    <Link to="/">
                        <div className="sidebar-menu-item-wrapper">
                            <img src={favicon} alt="favicon.ico" className="sidebar-head-image" />
                            <div className="sidebar-title">MINOO TAVAKOLI</div>
                        </div>
                    </Link>
                    <hr />
                    <Link to="/dashboard">
                        <div className="sidebar-menu-item-wrapper">
                            <img src={pieChart} alt="pieChart" className="sidebar-image" />
                            <div className="sidebar-title">DASHBOARD</div>
                            <br />
                        </div>
                    </Link>

                    <div className="sidebar-menu-item-wrapper" onClick={() => { setPageDetails(!pageDetails) }}>
                        <img src={imageIcon} alt="imageIcon" className="sidebar-image" />
                        <div className="sidebar-title">
                            <span>PAGES</span>
                            <div class="sidebar-arrow-down" />
                        </div>
                        <br />
                        {pageDetails &&
                            <>
                                <div className="sidebar-details-item-title-summary-wrapper">
                                    <div className="sidebar-details-title-item-summary">
                                        <span className=" sidebar-mini-icon">P</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item-summary">
                                        <span className=" sidebar-mini-icon">RS</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item-summary">
                                        <span className=" sidebar-mini-icon">T</span>
                                    </div>
                                    <br />

                                    <Link to={"/login"} className="link-styles">
                                        <div className="sidebar-details-title-item-summary">
                                            <div className=" sidebar-mini-icon">L</div>
                                        </div>
                                    </Link>
                                    <br />

                                    <div className="sidebar-details-title-item-summary">
                                        <span className=" sidebar-mini-icon">R</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item-summary">
                                        <span className=" sidebar-mini-icon">LS</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item-summary">
                                        <span className=" sidebar-mini-icon">UP</span>
                                    </div>
                                    <br />
                                </div>


                                <div className="sidebar-details-title-wrapper">
                                    <div className="sidebar-details-title-item">
                                        <span className="sidebar-normal">PRICING</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item">
                                        <span className="sidebar-normal">RTL SUPPORT</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item">
                                        <span className="sidebar-normal">TIMELINE</span>
                                    </div>
                                    <br />

                                    <Link to={"/login"} className="link-styles" >
                                        <div className="sidebar-details-title-item">
                                            <span className="sidebar-normal">LOGIN</span>
                                        </div>
                                    </Link>
                                    <br />

                                    <div className="sidebar-details-title-item">
                                        <span className="sidebar-normal">REGISTER</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item">
                                        <span className="sidebar-normal">LOCK SCREEN</span>
                                    </div>
                                    <br />

                                    <div className="sidebar-details-title-item">
                                        <span className="sidebar-normal">USER PROFILE</span>
                                    </div>
                                    <br />
                                </div>
                            </>}
                    </div>
                    <div className="sidebar-menu-item-wrapper">
                        <img src={molecule} alt="molecule" className="sidebar-image" />
                        <div className="sidebar-title">COMPONENTS</div>
                        <br />
                    </div>
                    <div className="sidebar-menu-item-wrapper">
                        <img src={forms} alt="forms" className="sidebar-image" />
                        <div className="sidebar-title">FORMS</div>
                        <br />
                    </div>
                    <div className="sidebar-menu-item-wrapper">
                        <img src={puzzle} alt="puzzle" className="sidebar-image" />
                        <div className="sidebar-title">TABLES</div>
                        <br />
                    </div>
                    <div className="sidebar-menu-item-wrapper">

                        <img src={pin} alt="pin" className="sidebar-pin-image" />
                        <div className="sidebar-title">MAPS</div>
                        <br />
                    </div>
                    <Link to="/widgets">
                        <div className="sidebar-menu-item-wrapper">
                            <img src={settings} alt="settings" className="sidebar-image" />
                            <div className="sidebar-title">WIDGETS</div>
                            <br />
                        </div>
                    </Link>
                    <Link to="/charts">
                        <div className="sidebar-menu-item-wrapper">
                            <img src={barChart} alt="barChart" className="sidebar-image" />
                            <div className="sidebar-title">CHARTS</div>
                            <br />
                        </div>
                    </Link>
                    <Link to="/calendar">
                        <div className="sidebar-menu-item-wrapper">
                            <img src={alarm} alt="alarm" className="sidebar-image" />
                            <div className="sidebar-title">CALENDAR</div>
                            <br />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar