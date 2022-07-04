import React, { useState } from 'react'
import Row from '../resource/components/gridSystem/Row'
import Col from '../resource/components/gridSystem/Col'
import Header from './header/Header'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'
import SidebarComplete from './sidebar/SidebarComplete'
import './Layout.css'

function Layout({ children, sidebarItem = true , title="" }) {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} title={title}/>
            {
                showSidebar ?
                    <Row style={{ backgroundColor: "#f5f6fa" }}>
                        <Col md="20">
                            {children}
                        </Col>
                        {sidebarItem &&

                            <Col md="4" >
                                <SidebarComplete />
                            </Col>
                        }
                    </Row> :
                    <>
                        <div className="side-layout">
                            {sidebarItem &&
                                <Sidebar />}
                            {children}
                        </div>
                    </>
            }

            <Footer />
        </>
    )
}

export default Layout;