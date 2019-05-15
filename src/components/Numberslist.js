import React from 'react';
import NumbersView from './NumbersView';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const Numberslist = ({ numbers }) => {
    const numbersList = numbers.map(
        (number, i) => (
            <NumbersView
            key={i}
            index={i}
            {...number.toJS()}
            />
        )
    ).reverse();
    return (
        <div className='text-center'>
            {numbersList}
        </div>
    )
};


Numberslist.propTypes = {
    numbers: PropTypes.objectOf(List)
}

Numberslist.defaultProps = {
    numbers: []
}

export default Numberslist;