import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <h1>Teste</h1>
                    </Col>
                    <Col xs={12} sm={4}>2 of 2</Col>
                    <Col xs={12} sm={4}>2 of 2</Col>
                </Row>
            </Container>            
        )
    }
}

export default Header