import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './App.css';

function Header() {
  return (
      <>
      <Row className ="row-head">
          <Col className ="columns col-one" md={{span:3, offset: 2}}>HOME | EMAIL | CONTACT US
            <FacebookIcon className ="social-icons first-icon" fontSize="small" />
            <TwitterIcon className ="social-icons" fontSize="small" />
            <InstagramIcon className ="social-icons" fontSize="small" />
            <YouTubeIcon className ="social-icons" fontSize="small" />
            <LinkedInIcon className ="social-icons" fontSize="small" />
          </Col>
          <Col className ="columns list-col" md={{offset: 2}}>
            STUDENTS FACULTY  ALUMNI  PARENTS  VISITORS  CAREERS
          </Col>
        </Row>
        <Row className ="rows">
          <Col md={{ span: 2, offset: 2 }}>
            <Image className="img-logo" src="https://www.srmist.edu.in/sites/default/files/srm-univ-logo_0.jpg" />
          </Col>
          <Col className ="columns search-bar" md={{ span: 2, offset: 4 }}>
            <InputGroup size="sm">
              <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </Col>
          <Col className ="col-but">
            <Button className="seach-but" variant="secondary"><SearchIcon className="magni" fontSize="small" color= "action"/></Button>
          </Col>
        </Row>
        <Row className ="rows-drop">
          <Col className="col-drop" md={{ span: 10, offset: 3 }}>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                About SRM
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Facts</Dropdown.Item>
                <Dropdown.Item href="#">The Campus</Dropdown.Item>
                <Dropdown.Item href="#">Student Accomodation</Dropdown.Item>
                <Dropdown.Item href="#">Governance</Dropdown.Item>
                <Dropdown.Item href="#">Student Achievements</Dropdown.Item>
                <Dropdown.Item href="#">Career Centre</Dropdown.Item>
                <Dropdown.Item href="#">Visiting SRM</Dropdown.Item>
                <Dropdown.Item href="#">SRM CARE</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Admission
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Admission India</Dropdown.Item>
                <Dropdown.Item href="#">Admission International</Dropdown.Item>
                <Dropdown.Item href="#">Student Mobility</Dropdown.Item>
                <Dropdown.Item href="#">Transfer Program</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Academics
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Colleges And Schools</Dropdown.Item>
                <Dropdown.Item href="#">Departments</Dropdown.Item>
                <Dropdown.Item href="#">Faculty Directory</Dropdown.Item>
                <Dropdown.Item href="#">Library</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Research
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Directorate of Research</Dropdown.Item>
                <Dropdown.Item href="#">Academic Research</Dropdown.Item>
                <Dropdown.Item href="#">Funded Research</Dropdown.Item>
                <Dropdown.Item href="#">Centre for Statistics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Campus Life
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Arts & Culture</Dropdown.Item>
                <Dropdown.Item href="#">Students Clubs</Dropdown.Item>
                <Dropdown.Item href="#">Student Counseling Services</Dropdown.Item>
                <Dropdown.Item href="#">Athletics & Fitness</Dropdown.Item>
                <Dropdown.Item href="#">Student Life</Dropdown.Item>
                <Dropdown.Item href="#">Community Radio</Dropdown.Item>
                <Dropdown.Item href="#">Public Service</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Placements
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">About</Dropdown.Item>
                <Dropdown.Item href="#">Activities</Dropdown.Item>
                <Dropdown.Item href="#">Milestones</Dropdown.Item>
                <Dropdown.Item href="#">Recruiters</Dropdown.Item>
                <Dropdown.Item href="#">Contacts</Dropdown.Item>
                <Dropdown.Item href="#">Community Radio</Dropdown.Item>
                <Dropdown.Item href="#">Public Service</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="d-inline dropy">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Group Institutions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">SRM Institute of Science and Technology, Chennai</Dropdown.Item>
                <Dropdown.Item href="#">SRM University, Andhra Pradesh</Dropdown.Item>
                <Dropdown.Item href="#">SRM University, Haryana</Dropdown.Item>
                <Dropdown.Item href="#">SRM University, Sikkim</Dropdown.Item>
                <Dropdown.Item href="#">Contacts</Dropdown.Item>
                <Dropdown.Item href="#">Community Radio</Dropdown.Item>
                <Dropdown.Item href="#">Public Service</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        </>
  );
}

export default Header;