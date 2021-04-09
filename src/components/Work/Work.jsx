import { Component } from 'react';
import { connect } from 'react-redux';
import {selectDetail} from '../../actions'
import AnimatedCard from '../Global/AnimatedCard';
import './Work.css';


// Main Component for Work section
class Work extends Component{

    render(){
        return(
            <div className="work-container work-background">
                <h1 className="work-heading">Work Profiles</h1>
                <div className="center work-container row">

                    {
                        this.props.details.map(detail => {
                            return <AnimatedCard
                                className={`col span-1-of-${this.props.details.length}`}
                                imgSouce={detail.image} 
                                heading = {detail.profile}
                                content = {detail.content}
                                stars = {detail.stars}
                                key = {detail.id}
                                rank = {detail.id}
                            />

                        })
                    }
                    
                </div>
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
