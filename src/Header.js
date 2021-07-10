import { Component, React } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo192.png';
import Home from './Pages/Home';
import CSGO from './Pages/CSGO';
import Dota2 from './Pages/Dota2';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"

                            />
                            Turiky
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/csgo">CS:GO</Nav.Link>
                                <Nav.Link href="/dota2">Dota 2</Nav.Link>

                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/csgo" component={CSGO}/>
                        <Route exact path="/dota2" component={Dota2}/>
                    </Switch>
                </Router>
            </>
        )
    }
}