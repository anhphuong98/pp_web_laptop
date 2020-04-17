import React, { Component} from 'react';
import { Input, NavbarToggler, Navbar, Nav, NavItem, NavLink, NavbarBrand,
    Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup,
    InputGroupAddon, InputGroupText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        };
        this.toggle = this.toggle.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }
    toggle()  {
        this.setState((state) => ({
            isOpen : !state.isOpen
        }));
    }
    handleSignOut() {
        localStorage.clear();
        window.location.reload();
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="header" id="header">
                <div className="container-fluid" style={{backgroundColor : "#FFFFFF"}}>  
                    <Navbar light  expand="md">
                        <NavbarBrand href="/">
                            <img src="https://fptshop.com.vn/uploads/originals//fpt-shop-tuyen-nhieu-vi-tri-lam-viec-tai-cac-shop-ha-noi-id27942.png" 
                            alt="image_errors" style={{ width : "180px", height : "50px"}} 
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav  className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" active>Trang chủ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" active>Bảng tin</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" active>Liên hệ</NavLink>
                                </NavItem>
                                <NavItem style={{marginLeft : "3rem"}}>
                                    <InputGroup>
                                        <Input type="search" placeholder="Nhập tên laptop" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText> <i className="fas fa-search" style={{cursor : "pointer", fontSize : "20px"}}></i></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </NavItem>
                            </Nav>
                            <div>
                                <i className="fas fa-phone-volume" style={{cursor : "pointer", fontSize : "20px", marginRight : "0.5rem"}}></i>
                                <span style={{marginRight : "3rem"}}><strong>0337479966</strong></span>
                            </div>
                            <Nav>
                                <NavItem>
                                    <i href="#" className="fas fa-shopping-cart" 
                                        style={{ fontSize : "28px", cursor : "pointer", marginRight : "1rem"}}></i>
                                </NavItem>
                            </Nav>       
                            {
                                localStorage.getItem("signined") ? 
                                <UncontrolledDropdown>
                                <DropdownToggle style={{ backgroundColor : "#43A892"}}>
                                    {localStorage.getItem("name")}
                                </DropdownToggle> 
                                <DropdownMenu>
                                    <DropdownItem>Hồ sơ</DropdownItem>
                                    <DropdownItem>Lịch sử </DropdownItem>
                                    <DropdownItem  onClick={this.handleSignOut}>Đăng xuất</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>    
                                :  
                                <UncontrolledDropdown>
                                <DropdownToggle style={{ backgroundColor : "#43A892"}}>
                                    Tài khoản
                                </DropdownToggle> 
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/login">Đăng nhập</DropdownItem>
                                    <DropdownItem  tag="a" href='/signUp'>Đăng ký</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>       
                            }                   
                          
                        </Collapse> 
                    </Navbar>
                </div>
                <div style={{marginTop : "1rem"}} className="container-fluid">
                    <Breadcrumb style={{ backgroundColor : "white"}}>
                        <BreadcrumbItem><a href="/">Trang chủ</a></BreadcrumbItem>
                        <BreadcrumbItem active>Liên hệ</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);