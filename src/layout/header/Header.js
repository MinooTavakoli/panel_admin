import React, { useState } from 'react';
import menuIcon from '../../assets/icons/menuIcon.png'
import avatarIcon from '../../assets/icons/avatarIcon.png'
import waveIcon from '../../assets/icons/waveIcon.png'
import searchIcon from '../../assets/icons/searchIcon.png'
import PopOver from '../../resource/components/popOver/PopOver';
import './Header.css'

function Header({ showSidebar, setShowSidebar, title="" }) {
    const [showAvatarPopOver, setShowAvatarPopOver] = useState(false);
    const [showWavePopOver, setShowWavePopOver] = useState(false);
    let dataAvatar = [
        {
            title: "profile",
        },
        {
            title: "settings"
        },
        {
            title: "logout"
        }
    ]
    let dataWave = [
        {
            title: "Mike John responded to your email",
        },
        {
            title: "You have 5 more tasks"
        },
        {
            title: "Your friend Michael is in town"
        },
        {
            title: "Another notification"
        },
        {
            title: "Another one"
        }
    ]
    return (
        <>
            <PopOver show={showAvatarPopOver} data={dataAvatar}
                showShadow={true} dir="rtl" style={{ top: "7%", right: "3%" }}
                outSideClick={() => setShowAvatarPopOver(false)}
            >
            </PopOver>
            <PopOver show={showWavePopOver} data={dataWave}
                showShadow={true} dir="rtl" style={{ top: "7%", right: "7%", width: 300 }}
                outSideClick={() => setShowWavePopOver(false)}
            />
            <div className='header-component'>
                <div className='header-side-ltr'>
                    <div className="menu-icon-wrapper" onClick={() => { setShowSidebar(!showSidebar) }}>
                        <img src={menuIcon} alt="menu-icon" className="menu-icon" />
                    </div>
                    <div className="menu-title-wrapper">
                        <span className='menu-title'>{title}</span>
                    </div>
                </div>

                <div className='header-side-rtl'>
                    <div className="avatar-icon-wrapper">
                        <img src={avatarIcon} alt="avatar-icon" className="avatar-icon" onClick={() => setShowAvatarPopOver(!showAvatarPopOver)} />
                        <img src={waveIcon} alt="wave-icon" className="wave-icon" onClick={() => setShowWavePopOver(!showWavePopOver)} />
                        <img src={searchIcon} alt="search-icon" className="search-icon" />
                    </div>
                </div>
            </div>
            {/* {showComplete &&
                <Sidebar />} */}
        </>
    )
}

export default Header