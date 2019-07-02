import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import{fetchTips} from "../actions/receive"

class RandomTips extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchTips())
    }
    render() {
        const randomPick = Math.floor(Math.random()* this.props.tips.length);
        return(
            <Fragment>
                <div>
                    {this.props.tips.length &&
                        <Fragment>
                            <h2 id="carouselHeader" >
                                Tip: <p>{this.props.tips[randomPick].title}</p>
                            </h2>
                        <h4>{this.props.tips[randomPick].description}</h4>
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        tips: state.tips
    }
}

export default connect(mapStateToProps)(RandomTips)