import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Home extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>Home Page</h1>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }
}
export default Home