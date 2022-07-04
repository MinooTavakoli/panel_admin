import React from 'react';
import Layout from '../../../layout/Layout';
import Button from '../../components/buttons/Button';
import Card from '../../components/gridSystem/Card';
import Col from '../../components/gridSystem/Col';
import Row from '../../components/gridSystem/Row';
import arrowLeft from '../../../assets/icons/arrow-left.png'
import arrowRight from '../../../assets/icons/arrow-right.png'
import infoIcon from '../../../assets/icons/info.png'
import successIcon from '../../../assets/icons/success.png'
import warningIcon from '../../../assets/icons/warning.png'
import dangerIcon from '../../../assets/icons/danger.png'
import likeIcon from '../../../assets/icons/like.png'
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

            </Row>
        </Layout>

    )
}

export default Buttons