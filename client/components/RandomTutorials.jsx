import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import{fetchTutorials} from "../actions/receive"

class RandomTutorials extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchTutorials())
    }
    render() {
        const randomPick = Math.floor(Math.random()* this.props.tutorials.length);
        return(
            <Fragment>
                <div>
                    {this.props.tutorials.length &&
                        <Fragment>
                            <h2 id="carouselHeader" >
                                Tutorial: {this.props.tutorials[randomPick].title}
                            </h2>
                        <h4>{this.props.tutorials[randomPick].description}</h4>
                        <h4><a href={this.props.tutorials[randomPick].source_url}>Find out more</a></h4>
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        tutorials: state.tutorials
    }
}

export default connect(mapStateToProps)(RandomTutorials)