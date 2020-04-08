import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

class LoginContent extends Component {
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
                                <Button type="submit">Đăng nhập</Button>
                            </Form>
                        </Col>
                        <Col sm="6">
                            NAP SHOP luôn mang đến sự lựa chọn tốt nhất cho bạn
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default LoginContent;