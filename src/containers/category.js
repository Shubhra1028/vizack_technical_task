import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCategory} from '../actions';
import {bindActionCreators} from 'redux';

class CategoryAvail extends Component{
    renderCategoryList(){
        return this.props.category.map((category) => {
            return (
                <li 
                key={category.type} 
                onClick={()=> {
                    document.querySelector('#listOfTypes').classList.add("hide")
                    this.props.selectCategory(category)
                }}
                className="list-group-item">
                    {category.type}
                </li>
            );
        });
    }

    render(){
        return(
            <ul id="listOfTypes" className="list-group container">
            {this.renderCategoryList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        category : state.category
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectCategory : selectCategory}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (CategoryAvail);