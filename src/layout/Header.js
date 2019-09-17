import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {HeaderPartial} from '../styles'

class Header extends React.Component {
    render() {
        return (
            <HeaderPartial>    
                <Container>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h1>Teste</h1>
                        </Col>
                        <Col xs={12} sm={4}>2 of 2</Col>
                        <Col xs={12} sm={4}>2 of 2</Col>
                    </Row>
                </Container>            
            </HeaderPartial>
        )
    }
}

export default Header