import React, { Component } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { fetchMovies } from "../../state/actions/dataActions";

class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(fetchMovies(this.state.searchLine));
  };
  render() {
    const { searchLine } = this.state;

    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
          Filmi başlığa görə axtarın:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
          >
            Axtar
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null)(SearchBox);
