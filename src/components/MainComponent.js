import { Component } from "react";
import { Row, Col } from "reactstrap";

export class Main extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <a href='/albums' className="btn btn-lg">Albums</a>
                    </Col>
                    <Col>
                        <a href='/bands' className="btn btn-lg">Bands</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main;