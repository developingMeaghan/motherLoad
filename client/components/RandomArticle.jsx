import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import{ fetchArticleData } from "../actions/receive"

class RandomArticle extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchArticleData())
    }
    render() {
      console.log()
        const randomPick = Math.floor(Math.random()* this.props.articles.length);
        return(
            <Fragment>
                <div>
                    {this.props.articles.length &&
                        <Fragment>
                            <h2 id="carouselHeader" >
                              Article: <a href={this.props.articles[randomPick].source_url} target='_blank'>{this.props.articles[randomPick].title}</a>
                            </h2>
                        <h4>{this.props.articles[randomPick].description}</h4>
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        articles: state.articles
    }
}

export default connect(mapStateToProps)(RandomArticle)