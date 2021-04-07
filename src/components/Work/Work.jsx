import { Component } from 'react';
import { connect } from 'react-redux';
import {selectDetail} from '../../actions'

// Main Component for Work section
class Work extends Component{
    render(){
        return this.props.details.map(detail => {
                            return(
                                <input 
                                type="button"
                                value={detail.profile}
                                onClick={() => {
                                    this.props.selectDetail(detail);
                                    console.log("detail : ", detail);
                                    console.log(this.props.details);
                                }}/>
                            )
                        })
    }
}

// map state to prop. The function name can be anything
const mapStateToProps = (state) => {
    console.log(state);
    return{
        selectedDetail: state.selectedDetail,
        details: state.detailList
    }
}
// the connect()() syntax is this because connect() function returns another function
// added action i.e selectStore to connect because it provides action in the props so that we can call 'this.prop.selectSong(song)'
export default connect(mapStateToProps, {selectDetail})(Work);
