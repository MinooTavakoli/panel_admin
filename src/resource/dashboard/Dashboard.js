import React from 'react'
import Layout from '../../layout/Layout'
import Charts from '../charts/Charts';
import Card from '../components/gridSystem/Card';
import Col from '../components/gridSystem/Col';
import Row from '../components/gridSystem/Row';
import CardItem from './cardItem/CardItem';
import bubbleChat from '../../assets/icons/bubbleChat.png';
import star from '../../assets/icons/star.png';
import account from '../../assets/icons/account.png';
import molecule from '../../assets/icons/molecule.png';
import trophy from '../../assets/icons/trophy.png'
import refresh from '../../assets/icons/refresh.png'
import watch from '../../assets/icons/watch.png'
import sound from '../../assets/icons/sound.png'


function Dashboard() {
    return (
        <Layout>
            <Row >
                <Col md="24">
                    <Card dir="ltr" title="Total Shipments">
                        <Charts />
                    </Card>
                </Col>

                <Col md="6">
                    <CardItem
                        theme="theme4"
                        icon={molecule}
                        title="Errors"
                        value="12"
                        titleFooter="In the last hours"
                        footerIcon={watch}
                    />
                </Col>
                <Col md="6">
                    <CardItem
                        theme="theme3"
                        icon={account}
                        title="Users"
                        value="150,000"
                        titleFooter="Customers feedback"
                        footerIcon={trophy}
                    />
                </Col>
                <Col md="6">
                    <CardItem
                        theme="theme2"
                        icon={star}
                        title="Followers"
                        value="+45k"
                        titleFooter="Last Research"
                        footerIcon={sound}
                    />
                </Col>
                <Col md="6">
                    <CardItem
                        theme="theme1"
                        icon={bubbleChat}
                        title="Number"
                        value="150 GB"
                        titleFooter="Update Now"
                        footerIcon={refresh}
                    />
                </Col>
                <div style={{ height: "190px", textAlign: "center", width: "100%", fontSize: "26px" }}>
                    <br />
                    <br />
                    COMING SOON
                </div>
            </Row>
        </Layout>
    )
}

export default Dashboard;