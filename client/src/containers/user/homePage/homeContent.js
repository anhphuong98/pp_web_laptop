import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './homePage.css';
import LaptopList from '../../../components/laptop/laptopList';
import { getAllLaptop } from '../../../actions/laptopAction';
import  { connect } from 'react-redux';
class HomeContent extends Component {
    componentDidMount() {
        this.props.getAllLaptop();
    }
    render() {
        const imagesCarousel = [
            {
                "key" : 1,
                'caption' : '',
                "src" : "https://cdn.fptshop.com.vn/Uploads/Originals/2020/4/4/637216214820076131_Banner-HPT3-C1-2x.png",
            },
            {
                "key" : 2,
                'caption' : '',
                "src" : "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/31/637212446640247220_C1.png",
            },
            {
                "key" : 3,
                'caption' : '',
                "src" : "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/31/637212921094745540_C1.png",
            },
            {
                "key" : 4,
                'caption' : '',
                "src" : "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/4/5/637216741707634874_C1%20Laptop%20Gaming%20-%20Section1.png"
            },
        ]
        return (
            <div className="container-fluid">
                <Row>
                    <Col sm="12">
                        <UncontrolledCarousel items={imagesCarousel}></UncontrolledCarousel>
                    </Col>
                </Row>
                <div style={{ marginTop : "1rem", backgroundColor : "#FFFFFF"}}>
                    <Row >
                        <Col sm="1">
                        </Col>
                        <Col sm="10" id="list-brand"> 
                            <h4 style={{ display: "block", textAlign : "center", marginTop : "0.5rem"}}>Thương hiệu laptop</h4>       
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/asus.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/acer.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/apple.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/lenovo.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/msi.png" alt="Asus"/>
                                </a>
                            </span>
                            <span className="item">
                                <a href="/"><img src="https://phucanhcdn.com/media/brand/dell.png" alt="Asus"/>
                                </a>
                            </span>      
                        </Col>
                        <Col sm="1">
                        </Col>
                    </Row>
                </div>
                <div className="list-laptop">
                    <LaptopList laptops={this.props.laptop.laptops}/>
                </div>
                <div className="home-pagination">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="/" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="/" />
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink href="/">
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/">
                            5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="/" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="/" />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    laptop : state.laptop
})

const mapDispatchToProps = (dispatch) => ({
    getAllLaptop : () => dispatch(getAllLaptop())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);