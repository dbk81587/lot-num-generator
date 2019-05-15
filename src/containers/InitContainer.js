import React, { Component } from 'react';
import { Init } from '../components';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InitContainer extends Component {
    render() {
        return (
            <div>
                <Init onGenNumbers={this.props.onGenNumbers } onSelectNum={this.props.onSelectNum} selectedNum={this.props.selectedNum} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedNum: state.init.get('selectedNum')
})

const mapDispatchToProps = (dispatch) => ({
    onSelectNum: (num) => dispatch(actions.onSelectNum(num)),
    onGenNumbers: (arr) => dispatch(actions.onGenNumbers(arr))
})

InitContainer.propTypes = {
    selectedNum: PropTypes.number,
    onSelectNum: PropTypes.func,
    onGenNumbers: PropTypes.func
}

InitContainer.defaultProps = {
    selectedNum: 0,
    onSelectNum: 0,
    onGenNumbers: 0
}



export default connect(mapStateToProps, mapDispatchToProps)(InitContainer);