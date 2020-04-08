import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

class SignUpContent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="login-content"  style={{backgroundColor : "#FFFFFF"}}>
                    <Row>
                        <Col sm="6">
                            <Form>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Mật khẩu</Label>
                                    <Input type="password"/>
                                </FormGroup>
                                <Button type="submit">Đăng ký</Button>
                            </Form>
                        </Col>
                        <Col sm="6">
                            Đây là trang đăng ký
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SignUpContent;