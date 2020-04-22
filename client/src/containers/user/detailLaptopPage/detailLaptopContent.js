import React, { Component } from 'react';
import ListBrand from '../../../components/brand/listBrand';
import LaptopInfo from './laptopInfo/laptopInfo';
import LaptopDetail from '../../../components/laptop/laptopDetail';
import CommentList from '../../../components/comment/commentList';
import Evaluation from '../../../components/evaluation/evaluation';
import LaptopSuggestionList from '../../../components/laptop/laptopSuggestionList';
import { getDetailLaptop } from '../../../actions/laptopAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class DetailLaptopContent extends Component {
    componentDidMount() {
        if(this.props.match.params.id){
            this.props.getDetailLaptop(this.props.match.params.id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.laptop !== this.props.laptop){
            this.setState({
                laptop : nextProps.laptop.laptop
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <LaptopInfo laptop={this.props.laptop.laptop}/>
                <LaptopDetail laptop={this.props.laptop.laptop}/>
                <LaptopSuggestionList />
                <CommentList />
                <Evaluation />
                <ListBrand />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    laptop : state.laptop
});

const mapDispatchToProps = (dispatch) => ({
    getDetailLaptop : (id) => dispatch(getDetailLaptop(id)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailLaptopContent));