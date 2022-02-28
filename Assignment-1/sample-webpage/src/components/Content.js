import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './App.css';

function Content() {
  return (
    <>
        <Row>
            <Col className="col-bread" md={{ offset: 2 }}>
                <Breadcrumb>
                    <Breadcrumb.Item className="please" active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="please" active>Engineering</Breadcrumb.Item>
                    <Breadcrumb.Item className="please" active>Dean-message</Breadcrumb.Item>
                    <Breadcrumb.Item className="ppplease" active>Dean's Message</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
        <div className="conte">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                <h6 className="col-dean">DEAN'S MESSAGE</h6>
                <span><hr/></span>
                </Col>
            </Row>
            <Row>
                <Col className="col-message" md={{ span: 8, offset: 2 }}>
                <Image className="img-dean" src="https://www.srmist.edu.in/sites/default/files/images/IMG_8979.jpg"/>
                <p className="first-para mx-2">
                    Welcome to the College of Engineering and Technology (CET), SRM Institute of Science &amp; Technology (SRMIST), Chennai, India. 
                    Situated in sprawling campuses in Kattankulathur, Ramapuram, Vadapalani (Ramapuram-Part) and Ghaziabad with more than three decades
                    of service to the student community, it is the flagship college of the Institute. We are truly a vibrant community where a
                    spiring students prepare themselves to be responsible leaders and lifelong learners through rigorous engineering education. Wit
                    h students in India seeking more inter-disciplinary programs and flexibility in course curriculum, SRM IST shifted the focus on
                    to the manner the programs are offered, and the curriculum is designed.
                </p>
                <p>
                    The programme and curriculum are designed in such a manner that the student has the freedom to decide the pathway to career prog
                    ression. A student who seeks an admission into the College of Engineering and Technology shall have an option to pursue a 
                    <em><strong> Major</strong></em> OR <em><strong>Major with Specialization</strong></em> OR <em><strong>Major with a Minor certification</strong></em>.
                </p>
                <p>
                    This gives the freedom for students to design their degree program, choose their course curriculum and decide their future care
                    er. This, with active learning and industry internship, will make our program a real <strong>'Inter-Disciplinary Experiential Active Learning' (IDEAL).</strong>
                </p>
                <p>
                    Our Engineering programmes provide a vibrant learning environment and ample opportunities for leadership by developing their sk
                    ill sets required for their career growth. Our strengths are the top-class faculty members who take up scientific challenges 
                    through their research work and transfer their knowledge gained through research experience to the students.
                </p>
                <p>
                    Our strong connections with industry ensure there is no latency between the industry expectations and the curriculum offering. 
                    The international collaborations, Semester Abroad Programme, Faculty Abroad Programme, Faculty Industry Immersion Programmes, 
                    Industry supported laboratories and degree programmes do make education at SRM the best in the league.
                </p>
                <p>
                    The SRM Innovation and Incubation Centre and SRM Innovation and Design Centre aims to create an ecosystem of innovation and 
                    entrepreneurship to create global leaders. This has resulted in the centre hosting 10 start-ups conceived by student and 
                    alumni along with another 25 teams in the pre-incubation stage.
                </p>
                <p>
                    We are proud to have a strong alumni base. Our alumni have been continuously contributing to the Faculty in providing ample
                    opportunities for our students to enrich their career development and acquire experiential learning exposures. 
                </p>
                <p>
                    I am honoured to be part of a team of people who are committed, compassionate and team leaders, and keep SRM flag flying high.
                </p>
                <p>
                    You can also follow us on Facebook, Twitter, LinkedIn, Instagram and YouTube to learn more about the quality, depth, and 
                    breadth of our programs, activities and achievements.
                </p>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Content;