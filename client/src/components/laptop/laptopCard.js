import React, { Component } from 'react';
import { Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
class LaptopCard extends Component {
    render() {
        const laptop = this.props.laptop;
        const images = laptop.images;
        const price = laptop.price;
        const name = laptop.name
        return (
            <Col sm="3">
                <Card style={{ height : "28rem"}}>
                    <CardBody>
                        <Link to={"detailLaptop/" + laptop.id}><CardImg style={{ display : "relative", height: "13rem"}} src={images[0].url_image} alt="image_errors"/></Link>
                        <CardTitle>
                            {name}
                        </CardTitle>
                        <CardSubtitle tag="b">
                            {price}đ
                        </CardSubtitle>
                        <CardText>
                         <i className="icons icon-star star5"></i>
                        </CardText>
                        <div style={{ marginTop : "3rem"}}>
                            <Button color="light" style={{border : "solid 1px #DDDDDD"}}><Link to={"detailLaptop/" + laptop.id} style={{ textDecoration : "none", color : "#43A892" }}>Chi tiết</Link></Button>{' '}
                            <Button style={{ backgroundColor : "#43A892"}}>Thêm vào giỏ</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default  LaptopCard;