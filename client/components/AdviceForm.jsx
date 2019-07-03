import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addDataToDB } from "../apis/resources";
import { fetchCategories } from "../actions/categories";

class AdviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      description: "",
      type: "",
      sourceUrl: "",
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }
  handleSubmit(event) {
    this.setState({
      categories: [],
      description: "",
      type: "",
      sourceUrl: "",
      title: ""
    })
    event.preventDefault();
    addDataToDB(this.state);
    alert('Submitted')
  }
  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleCategory(event) {
    const arr = this.state.categories;
    const thing = event.target.value;
    const index = arr.indexOf(thing);
    return index > -1
      ? arr.splice(index, 1)
      : this.setState({
          categories: [...this.state.categories, event.target.value]
        });
  }
  render() {
    return (
      <Fragment>
        <h2 className="title is-3 has-text-centered has-text-white">
          Tweet of advice
        </h2>
        <form
          id="LnRForm"
          className="AdviceForm form box"
          onSubmit={this.handleSubmit}
        >
          <div className="field">
            <label className="column is-6 label has-text-left is-large has-text-white ">
              <h2 className="title is-2 has-text-white"> Title </h2>
            </label>
            <div className="control">
              <input
                className="input textarea is-large has-text-grey"
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <label className="column is-6 label is-large has-text-white has-text-left" />
            <label className="column is-6 label is-large has-text-white has-text-left">
              I'd like to give advice on:
            </label>
            <div className="control">
              {this.props.categories.map(category => {
                return (
                  <div id="adviceChecks" className="column" key={category.id}>
                    <input
                      type="checkbox"
                      name={category.name}
                      value={category.id}
                      onClick={this.handleCategory}
                      checked={this.state.categories.includes(String(category.id))}
                    />
                    <h2 className="has-text-white">{category.name}</h2>
                  </div>
                );
              })}
            </div>
            <label className="column is-6 label is-large has-text-white has-text-left">
              Advice
            </label>
            <div className="control">
              <textarea
                className="textarea has-text-grey textarea is-medium"
                name="description"
                placeholder="Enter a tweet of advice"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>
            <br />
            <div className="control">
              <div id="adviceR">
                <input
                  type="radio"
                  name="type"
                  value="tip"
                  onChange={this.handleChange}
                  checked= {this.state.type.includes("tip")}
                />
                <p>Tip</p>
              </div>
              <div id="adviceR">
                <input
                  type="radio"
                  name="type"
                  value="tutorial" 
                  required
                  onChange={this.handleChange}
                  checked ={this.state.type.includes('tutorial')}
                />
                <p>Tutorial</p>
              </div>
            </div>
            <label className="column is-6 label is-large has-text-white has-text-left">
              Url for Tutorial
            </label>
            <div className="control">
              <input
                className="input has-text-grey"
                type="text"
                name="sourceUrl"
                placeholder="url here"
                value={this.state.sourceUrl}
                onChange={this.handleChange}
                
              />
            </div>
            <br />
            <div className="control">
              <label className="column is-6 label is-large has-text-white has-text-left is-centered">
                <input
                  id="button1"
                  className="button"
                  type="submit"
                  onSubmit={this.handleSubmit}
                />
              </label>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}
export default connect(mapStateToProps)(AdviceForm);
