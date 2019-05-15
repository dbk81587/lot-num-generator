import React from 'react';
import PropTypes from 'prop-types';

const NumbersView = ({ numbersArr }) => {
    return (
        <div>
            { numbersArr.map((ele,i)=> <div key={i} className='smGlobalBtn opct'>{ele}</div>) }
        </div>
    )
}

NumbersView.propTypes = {
    numbersArr: PropTypes.array
}

NumbersView.defaultProps = {
    numbersArr: []
}

export default NumbersView;