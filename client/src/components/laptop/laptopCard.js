import React, { Component } from 'react';
import { Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, Button, CardText, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { addToCard } from '../../actions/cartAction';
import { connect } from 'react-redux';

class LaptopCard extends Component {
    constructor(props){
        super(props);
        this.setBrand = this.setBrand.bind(this);
        this.state = {
            openModalLoginSuggestion : false,
            openModalAddToCart : false
        }
        this.closeModal = this.closeModal.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    setBrand() {
        localStorage.setItem("brand", this.props.laptop.brand);
        // Khi click vao phai truyen brand qua trang tiep de render theo brand
        // nen truyen bang localStorage
        this.props.history.push("/detailLaptop/" + this.props.laptop.id);
        window.location.reload();
    }
    // kiem tra xem laptop da co trong cart hay chua
    checkCart(laptops, laptop) {
        let result = false;
        laptops.forEach(element => {
            if(element.id == laptop.id){
                result =  true
            }
        });
        return result;
    }
    handleAddToCart() {
        if(!localStorage.getItem('signined')) {
            this.setState({
               openModalLoginSuggestion : true 
            });
        }
        else {
            this.setState({
                openModalAddToCart : true
            });
            let oldLaptops = JSON.parse(localStorage.getItem('laptops')) || [];
            console.log(oldLaptops);
            const laptop = this.props.laptop;
            if(this.checkCart(oldLaptops, laptop) === false){
                oldLaptops.push(laptop);
                console.log(oldLaptops.indexOf(laptop))
                //stringiy de chuyen tu object sang Json... localstorage chi luu json 
                // => mang object => mangjson duoc luu lai
                localStorage.setItem('laptops', JSON.stringify(oldLaptops));
            }  else {
                console.log("trong local co roi")
            }
        }
    }
    closeModal() {
        this.setState({
            openModalAddToCart : false,
            openModalLoginSuggestion : false
        })
        this.props.addToCard(JSON.parse(localStorage.getItem('laptops')).length)
    }
    render() {
        const laptop = this.props.laptop;
        const images = laptop.images;
        let price = laptop.price;
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const name = laptop.name
        return (
            <Col sm="3">
                <Card style={{ height : "28rem"}}>
                    <CardBody>
                        <CardImg 
                            onClick={this.setBrand} 
                            style={{ display : "relative", height: "13rem", cursor : "pointer"}} 
                            src={images[0].url_image} alt="errors"
                        />
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
                            <Button color="light" style={{border : "solid 1px #DDDDDD"}}><Link to="" style={{ textDecoration : "none", color : "#43A892" }} onClick={this.setBrand}>Chi tiết</Link></Button>{' '}
                            <Button style={{ backgroundColor : "#43A892"}} onClick={this.handleAddToCart}>Thêm vào giỏ</Button>
                        </div>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.openModalAddToCart} toggle={this.closeModal}>
                    <ModalBody>Đã thêm vào giỏ hàng</ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor : "#43A892"}} onClick={this.closeModal}>OK</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.openModalLoginSuggestion} toggle={this.closeModal}>
                    <ModalBody>Bạn cần đăng nhập để  mua hàng!!!</ModalBody>
                    <ModalFooter>
                        <Button style={{backgroundColor : "#43A892"}}><Link to="/login" style={{color : "#FFFFFF", textDecoration : "none"}}>Đăng nhập</Link></Button>
                        <Button onClick={this.closeModal}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCard : (quantity) => dispatch(addToCard(quantity))
});

export default  withRouter(connect(null, mapDispatchToProps)(LaptopCard));