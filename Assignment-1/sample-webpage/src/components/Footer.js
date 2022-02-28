import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import React from 'react'

function Footer() {
  return (
    <>
        <div className="last-pls">
          <Row className="rowsemi-foot">
            <Col className="col-foot">
              <h8 className="rowsemi-foot-head">International Relations</h8>
              <ul>
                <li>
                  ▶International Advisory Board
                </li>
                <li>
                  ▶Global Alliances
                </li>
                <li>
                  ▶Foreign Faculty
                </li>
              </ul>
            </Col>
            <Col className="col-foot">
              <h8 className="rowsemi-foot-head">Going Abroad</h8>
              <ul>
                <li>
                  ▶Semester Abroad Program
                </li>
                <li>
                  ▶Faculty Abroad Program
                </li>
                <li>
                  ▶Twining & Dual Degrees
                </li>
              </ul>
            </Col>
            <Col className="col-foot">
              <h8 className="rowsemi-foot-head">Get Placed</h8>
              <ul>
                <li>
                  ▶Career Centre
                  <ul>
                    <li>
                      ▶Placement
                    </li>
                    <li>
                      ▶Career Development Center
                    </li>
                  </ul>
                </li>
                <li>
                  ▶Corporate Advisory Board
                </li>
                <li>
                  ▶Corporate Relations
                </li>
              </ul>
            </Col>
            <Col className="col-foot">
              <h8 className="rowsemi-foot-head">Insights</h8>
              <ul>
                <li>
                  ▶IQAC
                </li>
                <li>
                  ▶Students Clubs
                </li>
                <li>
                  ▶SRM Video
                </li>
                <li>
                  ▶Virtual Tour
                </li>
                <li>
                  ▶Spectrum
                </li>
                <li>
                  ▶Muthucharam Community Radio
                </li>
                <li>
                  ▶Researgence
                </li>
                <li>
                  ▶SRM Innovation and Incubation Center
                </li>
              </ul>
            </Col>
            <Col className="col-foot">
              <h8 className="rowsemi-foot-head">Downloads</h8>
              <ul>
                <li>
                  ▶SRMJEEE 2020 Guide
                </li>
                <li>
                  ▶Management Info
                </li>
                <li>
                  ▶Medicine & Health Sciences Info
                </li>
                <li>
                  ▶Science and Humanities Info
                </li>
                <li>
                  ▶Hotel Management Info
                </li>
                <li>
                  ▶Agricultural Info
                </li>
              </ul>
            </Col>
            <Col className="col-foot">
              <h8 className="rowsemi-foot-head">Campuses</h8>
              <ul>
                <li>
                  ▶Chennai Area - Kattankulathur
                </li>
                <li>
                  ▶Chennai - Ramapuram
                </li>
                <li>
                  ▶Vadapalani Campus
                </li>
                <li>
                  ▶NCR - Ghaziabad
                </li>
                <li>
                  ▶Tiruchirappalli Campus
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Row className="fooot">
          <Col md={{offset:4}}>
            @ SRM Institute of Science and Technology (formerly known as SRM University), India. All rights reserved.
          </Col>
        </Row>
    </>
  )
}

export default Footer