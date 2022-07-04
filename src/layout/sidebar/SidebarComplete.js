import React from 'react';
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
import './SidebarComplete.css';

function SidebarComplete() {
    return (
        <div className="sidebar-complete-component">
            <div className="sidebar-complete-wrapper">
                <div className="sidebar-complete-head-wrapper">
                    <Link to="/">
                        <div className="sidebar-complete-menu-item-wrapper">
                            <img src={favicon} alt="favicon.ico" className="sidebar-complete-head-image" />
                            <div className="sidebar-complete-title">MINOO TAVAKOLI</div>
                        </div>
                    </Link>
                    <hr />
                    <Link to="/dashboard">
                        <div className="sidebar-complete-menu-item-wrapper">
                            <img src={pieChart} alt="pieChart" className="sidebar-complete-image" />
                            <div className="sidebar-complete-title">DASHBOARD</div>
                            <br />
                        </div>
                    </Link>
                    <div className="sidebar-complete-menu-item-wrapper">
                        <img src={imageIcon} alt="imageIcon" className="sidebar-complete-image" />
                        <div className="sidebar-complete-title">PAGES</div>
                        <br />
                    </div>
                    <div className="sidebar-complete-menu-item-wrapper">
                        <img src={molecule} alt="molecule" className="sidebar-complete-image" />
                        <div className="sidebar-complete-title">COMPONENTS</div>
                        <br />
                    </div>
                    <div className="sidebar-complete-menu-item-wrapper">
                        <img src={forms} alt="forms" className="sidebar-complete-image" />
                        <div className="sidebar-complete-title">FORMS</div>
                        <br />
                    </div>
                    <div className="sidebar-complete-menu-item-wrapper">
                        <img src={puzzle} alt="puzzle" className="sidebar-complete-image" />
                        <div className="sidebar-complete-title">TABLES</div>
                        <br />
                    </div>
                    <div className="sidebar-complete-menu-item-wrapper">
                        <img src={pin} alt="pin" className="sidebar-complete-pin-image" />
                        <div className="sidebar-complete-title">MAPS</div>
                        <br />
                    </div>
                    <Link to="/widgets">
                        <div className="sidebar-complete-menu-item-wrapper">
                            <img src={settings} alt="settings" className="sidebar-complete-image" />
                            <div className="sidebar-complete-title">WIDGETS</div>
                            <br />
                        </div>
                    </Link>
                    <Link to="/charts">
                        <div className="sidebar-complete-menu-item-wrapper">
                            <img src={barChart} alt="barChart" className="sidebar-complete-image" />
                            <div className="sidebar-complete-title">CHARTS</div>
                            <br />
                        </div>
                    </Link>
                    <Link to="/calendar">
                        <div className="sidebar-complete-menu-item-wrapper">
                            <img src={alarm} alt="alarm" className="sidebar-complete-image" />
                            <div className="sidebar-complete-title">CALENDAR</div>
                            <br />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SidebarComplete