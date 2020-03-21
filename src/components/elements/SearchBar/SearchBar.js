import React, {Component} from 'react';
// import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends Component{
  state = {

  }

  timeout = null;

  doSearch = (event) => {
    this.setState({ value: event.target.value });
    // clear timeout everytime we search
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value)
    }, 500);
  }

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

export default SearchBar