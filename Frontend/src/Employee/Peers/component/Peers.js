import classes from '../style/Peers.module.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Developer from './Developer';
import Tester from './Tester';
import DevOps from './DevOps';
import Director from './Director';

function Peers(props) {
    return (
        <div>
            <Director />
            <hr />
            <div className={classes.projectDetails}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <div className={classes.navigationBar}>
                                <Nav variant="tabs">
                                    <span className={classes.item}>
                                        <Nav.Item >
                                            <span className={classes.navTabs}>
                                                <Nav.Link eventKey="first" className={classes.navLink}>
                                                    Developers
                                                </Nav.Link>
                                            </span>
                                        </Nav.Item>
                                    </span>
                                    <span className={classes.item}>
                                        <Nav.Item>
                                            <span className={classes.navTabs}>
                                                <Nav.Link eventKey="second" className={classes.navLink}>
                                                    Testers
                                                </Nav.Link>
                                            </span>
                                        </Nav.Item>
                                    </span>
                                    <span className={classes.item}>
                                        <Nav.Item>
                                            <span className={classes.navTabs}>
                                                <Nav.Link eventKey="third" className={classes.navLink}>
                                                    Support
                                                </Nav.Link>
                                            </span>
                                        </Nav.Item>
                                    </span>
                                </Nav>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content >
                                <Tab.Pane eventKey="first" >
                                    <Developer />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Tester />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <DevOps />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
};

export default Peers;