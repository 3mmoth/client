import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

export class Footer extends Component{
    render(){
        return(
            
                <Row>
                    <div className="App-footer">
                    <Col xs={12} sm={12} md={4} lg={4}>
                    <p>This site is part of an assignment in the course 2DV513 at Linnaeus University</p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                    <p>Testing</p>
                    </Col>
                    </div>

                </Row>
                
            
        )
    }
}