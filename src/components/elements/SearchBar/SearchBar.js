import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends Component{
  state = {
    value: '',
  }

  timeout = null;

  doSearch = (event) => {
    // ES6 destructuring props and state
    const { callback } = this.props;
    // const { value }  = this.state;

    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);

    // set a timeout to wait for the user to stop writing
    // so we don't have to make unnecessary calls
    this.timeout = setTimeout( () => {
      callback(false, this.state.value);
    }, 500);
  }
  // doSearch = (event) => {
  //   this.setState({ value: event.target.value });
  //   // clear timeout everytime we search
  //   clearTimeout(this.timeout);

  //   this.timeout = setTimeout(() => {
  //     this.props.callback(this.state.value)
  //   }, 500);
  // }

  render(){
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesomeIcon icon="rmdb-fa-search" name="search" size="2x" />
          <input type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar