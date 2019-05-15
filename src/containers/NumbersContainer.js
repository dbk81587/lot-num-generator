import Numberslist from '../components/Numberslist';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    numbers: state.init.get('numbers')
})


export default connect(mapStateToProps, null)(Numberslist);