import { Component } from 'react';
import { connect } from 'react-redux';
import {selectDetail} from '../../actions'
import { BACKEND_IMAGE } from '../../constants/ImageResources';
import AnimatedCard from '../Global/AnimatedCard';
import './Work.css'

// Main Component for Work section
class Work extends Component{
    render(){
        return(
            <div>
                <AnimatedCard
                    imgSouce={BACKEND_IMAGE} 
                    heading = {"Backend Developer"}
                    content = {"Place some content here."}
                />
            </div>
        )
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
