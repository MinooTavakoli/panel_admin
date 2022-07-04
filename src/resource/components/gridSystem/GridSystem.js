import React from 'react'
import Card from './Card'
import Col from './Col'
import Row from './Row'
import Layout from '../../../layout/Layout'
import './GridSystem.css'

function GridSystem() {
  return (
    <Layout title="GRID SYSTEM">
      <div className="grid-system-wrapper" dir="ltr">
        <h4 className="grid-title-head">Grid Collapsed at 768px</h4>
        <Row dir="ltr">
          <Col md="12">
            <Card>
              <div className="grid-size">xl="12"    sm="12"    md="12"    lg="12"</div>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <div className="grid-size">xl="12"    sm="12"    md="12"    lg="12"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 600px</h4>
        <Row>
          <Col sm="8">
            <Card>
              <div className="grid-size">xl="8"    sm="8"    md="8"    lg="8"</div>
            </Card>
          </Col>
          <Col sm="8">
            <Card>
              <div className="grid-size">xl="8"    sm="8"    md="8"    lg="8"</div>
            </Card>
          </Col>
          <Col sm="8">
            <Card>
              <div className="grid-size">xl="8"    sm="8"    md="8"    lg="8"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col md="6">
            <Card>
              <div className="grid-size">xl="6"    sm="6"    md="6"    lg="6"</div>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <div className="grid-size">xl="6"    sm="6"    md="6"    lg="6"</div>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <div className="grid-size">xl="6"    sm="6"    md="6"    lg="6"</div>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <div className="grid-size">xl="6"    sm="6"    md="6"    lg="6"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col md="4">
            <Card>
              <div className="grid-size">xl="4"    sm="4"    md="4"    lg="4"</div>
            </Card>
          </Col>
          <Col md="16" xsHidden={true}>
            <div className="grid-size">xl="16"   sm="16"    md="16"    lg="16"   xsHidden="true"</div>
          </Col>
          <Col md="4">
            <Card>
              <div className="grid-size">xl="4"    sm="4"    md="4"    lg="4"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col md="6">
            <Card>
              <div className="grid-size">xl="6"    sm="6"    md="6"    lg="6"</div>
            </Card>
          </Col>
          <Col md="12" xsHidden={true}>
            <div className="grid-size">xl-12    sm="12"    md="12"    lg="12"    xsHidden="true"</div>
          </Col>
          <Col md="6">
            <Card>
              <div className="grid-size">xl="6"    sm="6"    md="6"    lg="6"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col md="8">
            <Card>
              <div className="grid-size">xl="8"    sm="8"    md="8"    lg="8"</div>
            </Card>
          </Col>
          <Col md="8" xsHidden={true}>
            <div className="grid-size">xl="8"    sm="8"    md="8"    lg="8"   xsHidden="true"</div>
          </Col>
          <Col md="8">
            <Card>
              <div className="grid-size">xl="8"    sm="8"    md="8"    lg="8"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col md="7" xsHidden={true}>
            <div className="grid-size">xl="7"    sm="7"    md="7"    lg="7"   xsHidden="true"</div>
          </Col>
          <Col md="10">
            <Card>
              <div className="grid-size">xl="10"    sm="10"    md="10"    lg="10"</div>
            </Card>
          </Col>
          <Col md="7" xsHidden={true}>
            <div className="grid-size">xl="7"    sm="7"    md="7"    lg="7"    xsHidden="true"</div>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col md="5" xsHidden={true}>
            <div className="grid-size">xl="5"    sm="5"    md="5"    lg="5"   xsHidden="true"</div>
          </Col>
          <Col md="14">
            <Card>
              <div className="grid-size">xl="14"    sm="14"    md="14"    lg="14"</div>
            </Card>
          </Col>
          <Col md="5" xsHidden={true}>
            <div className="grid-size">xl="5"    sm="5"    md="5"    lg="5"   xsHidden="true"</div>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col sm="24">
            <Card>
              <div className="grid-size">xl="24"    sm="24"    md="24"    lg="24"</div>
            </Card>
          </Col>
        </Row>
        <h4 className="grid-title">Grid Collapsed at 768px</h4>
        <Row>
          <Col xs="12" md="12">
            <Card>
              <div className="grid-size">xs="12" (Put it in mobile mode to understand the concept)</div>
            </Card>
          </Col>
          <Col xs="12" md="12">
            <Card>
              <div className="grid-size">xs="12" (Put it in mobile mode to understand the concept)</div>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <div className="paragraph-component">
          <h1>Paragraphs</h1>
          <br />
          <br />
          <Row dir="ltr">
            <Col md="12">
              <h3 className="paragraph-item">Some Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
            <Col md="12">
              <h3 className="paragraph-item">Another Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row dir="ltr">
            <Col md="8">
              <h3 className="paragraph-item">Some Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
            <Col md="8">
              <h3 className="paragraph-item">Some Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
            <Col md="8">
              <h3 className="paragraph-item">Some Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row dir="ltr">
            <Col md="8">
              <h3 className="paragraph-item">Some Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
            <Col md="16">
              <h3 className="paragraph-item">Some Title Here</h3>
              <div className="paragraph-item">
                One morning, when Gregor Samsa woke from troubled dreams,
                he found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                slightly domed and divided by arches into stiff sections.
                The bedding was hardly able to cover it and seemed ready to slide off any moment.
                His many legs, pitifully thin compared with the size of the rest of him,
                waved about helplessly as he looked.
                "What's happened to me?" he thought.
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default GridSystem