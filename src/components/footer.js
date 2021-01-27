
import React, {Component} from 'react';

import {Navbar, Container, Col} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();

        return (
            <Navbar class='navbar-custom' fixed="bottom" bg='secondary' variant="">
                <Container>
                    <Col lg={12} className='text-center' >
                        <div>{fullYear}-{fullYear+1}, All Rights Reserved by Someone</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}