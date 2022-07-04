import React from 'react';
import Layout from '../../../layout/Layout';
import Button from '../../components/buttons/Button';
import Card from '../../components/gridSystem/Card';
import Col from '../../components/gridSystem/Col';
import Row from '../../components/gridSystem/Row';
import arrowLeft from '../../../assets/icons/arrow-left.png';
import arrowRight from '../../../assets/icons/arrow-right.png';
import infoIcon from '../../../assets/icons/info.png';
import successIcon from '../../../assets/icons/success.png';
import warningIcon from '../../../assets/icons/warning.png';
import dangerIcon from '../../../assets/icons/danger.png';
import likeIcon from '../../../assets/icons/like.png';
import twitterIcon from '../../../assets/icons/twitter.png';
import facebookIcon from '../../../assets/icons/facebook.png';
import googleplusIcon from '../../../assets/icons/googleplus.png';
import linkedinIcon from '../../../assets/icons/linkedin.png';
import pinterestIcon from '../../../assets/icons/pinterest.png';
import youtubeIcon from '../../../assets/icons/youtube.png';
import './Buttons.css'

function Buttons() {
    return (
        <Layout>
            <Row dir="ltr">

                <Col md="12">
                    <Card title="Pick your Color" dir="ltr">
                        <div className="buttons-page-wrapper">
                            <Button
                                type="default"
                                size="sm"
                                label="Default"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="primary"
                                size="sm"
                                label="Primary"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="info"
                                size="sm"
                                label="Info"
                                className="buttons-page-size-item"
                            />
                        </div>
                        <div className="buttons-page-wrapper">
                            <Button
                                type="success"
                                size="sm"
                                label="Success"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="warning"
                                size="sm"
                                label="Warning"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="danger"
                                size="sm"
                                label="Danger"
                                className="buttons-page-size-item"
                            />
                        </div>
                    </Card>
                </Col>

                <Col md="12">
                    <Card title="Buttons with Label" dir="ltr">
                        <div className="buttons-page-wrapper">
                            <Button
                                type="default"
                                size="sm"
                                label="Left"
                                className="buttons-page-size-item"
                                iconLeft={arrowLeft}
                            />
                            <Button
                                type="default"
                                size="sm"
                                label="Right"
                                className="buttons-page-size-item"
                                iconRight={arrowRight}
                            />
                            <Button
                                type="info"
                                size="sm"
                                label="Info"
                                className="buttons-page-size-item"
                                iconLeft={infoIcon}
                            />
                        </div>
                        <div className="buttons-page-wrapper">
                            <Button
                                type="success"
                                size="sm"
                                label="Success"
                                className="buttons-page-size-item"
                                iconLeft={successIcon}
                            />
                            <Button
                                type="warning"
                                size="sm"
                                label="Warning"
                                className="buttons-page-size-item"
                                iconLeft={warningIcon}
                            />
                            <Button
                                type="danger"
                                size="sm"
                                label="Danger"
                                className="buttons-page-size-item"
                                iconLeft={dangerIcon}
                            />
                        </div>
                    </Card>
                </Col>

                <Col md="12">
                    <Card title="Pick your Size" dir="ltr">
                        <div className="buttons-page-wrapper">
                            <Button
                                type="primary"
                                size="xs"
                                label="size: xs"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="primary"
                                size="sm"
                                label="size: sm"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="primary"
                                size="md"
                                label="size: md"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="primary"
                                size="lg"
                                label="size: lg"
                                className="buttons-page-size-item"
                            />
                        </div>
                    </Card>
                </Col>

                <Col md="12">
                    <Card title="Pick your Style" dir="ltr">
                        <div className="buttons-page-wrapper">
                            <Button
                                type="primary"
                                size="sm"
                                label="Default"
                                className="buttons-page-size-item"
                            />
                            <Button
                                type="primary"
                                size="sm"
                                label="round"
                                className="buttons-page-size-item"
                                styles="littleRound"
                            />
                            <Button
                                type="primary"
                                size="sm"
                                label="with icon"
                                className="buttons-page-size-item"
                                styles="littleRound"
                                iconLeft={likeIcon}
                            />
                            <Button
                                type="primary"
                                size="none"
                                label=""
                                className="buttons-page-size-item"
                                styles="rounded"
                                iconCenter={likeIcon}
                            />
                            <Button
                                type="outline-primary"
                                size="sm"
                                label="Simple"
                                className="buttons-page-size-item"
                            />
                        </div>
                        <br />
                    </Card>
                </Col>

                <Col md="12">
                    <Card title="Social buttons" dir="ltr">
                        <div className="buttons-social-page-wrapper">
                            <Button
                                type="twitter"
                                size="sm-244"
                                label="Connect with Twitter "
                                className="buttons-page-size-item"
                                iconLeft={twitterIcon}
                            />
                            <Button
                                type="facebook"
                                size="sm-176"
                                label="Share · 2.2k"
                                className="buttons-page-size-item"
                                iconLeft={facebookIcon}
                            />
                            <Button
                                type="google"
                                size="sm-227"
                                label="Share on Google+"
                                className="buttons-page-size-item"
                                iconLeft={googleplusIcon}
                            />
                            <Button
                                type="linkedin"
                                size="sm-244"
                                label="Connect with Linkedin"
                                className="buttons-page-size-item"
                                iconLeft={linkedinIcon}
                            />
                            <Button
                                type="pinterest"
                                size="sm-168"
                                label="Pint it · 212"
                                className="buttons-page-size-item"
                                iconLeft={pinterestIcon}
                            />
                            <Button
                                type="youtube"
                                size="sm-218"
                                label="View on Youtube"
                                className="buttons-page-size-item"
                                iconLeft={youtubeIcon}
                            />

                        </div>
                        <br />
                    </Card>
                </Col>

                <Col md="12"></Col>

            </Row>
        </Layout>

    )
}

export default Buttons