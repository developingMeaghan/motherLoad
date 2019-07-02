import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import { fetchCategories } from "../actions/categories";
import { fetchSearch } from "../actions/search";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        redirect: false,
        clear: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }
  handleSubmit(event) {
    event.preventDefault();
    let values = Object.values(this.state);
    this.props.dispatch(fetchSearch(values, this.props.location.location));
    this.setState({
        redirect: true
    })
  }
  handleClear(){
    this.setState({
        clear: true
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (
      <Fragment>
        <input type="checkbox" id="navcheck" role="button" title="menu" />

        <label htmlFor="navcheck" aria-hidden="true" title="menu">
          <span className="burger">
            <span className="bar">
              <span className="filter has-text-grey-lighter">Filter</span>
            </span>
          </span>
        </label>

        <nav id="menu">
          <h2 className="title is-2">Filter:</h2>
          <div>
            <form className="filterForm" onSubmit={this.handleSubmit}>
              {this.props.categories.map(category => {
                return (
                  <Fragment key={category.id}>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            name={category.id}
                            value={category.id}
                            onChange={this.handleChange}
                          />
                          <span>{category.name}</span>
                        </label>
                      </li>
                    </ul>
                  </Fragment>
                );
              })}
             {this.state.clear && <Redirect to={this.props.location.url} />}
             {this.state.redirect && !this.props.filter &&<Redirect to="/filtered" />}
              <button  id="filterButton" type="submit">
              Filter 
              </button>
              {/* { clearButton }  */}
              {this.props.filter && <button id="filterButton" type="clear" onClick={this.handleClear} >Back</button>}
            </form>
          </div>
        </nav>

      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    search: state.search,
    categories: state.categories,
    tips: state.tips,
    location: state.location
  };
}
export default connect(mapStateToProps)(Form);
