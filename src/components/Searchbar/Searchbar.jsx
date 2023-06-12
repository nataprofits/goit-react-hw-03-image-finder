import { Component } from 'react';
import { GoSearch } from 'react-icons/go';

export class SearchBar extends Component {
  state = {
    listName: '',
  };
  handleListSubmit = evt => {
    evt.preventDefault();
    if (this.state.listName.trim() === '') {
      alert('Search field is empty!Please enter a search word.')
      return
    }
    this.props.onSubmit(this.state.listName);
    this.setState({ listName: '' });
  };
  handleListChange = evt => {
    this.setState({ listName: evt.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header>
        <form  onSubmit={this.handleListSubmit}>
          <button type="submit" >
            <GoSearch size="20" />
            <span>Search</span>
          </button>
          <input
            name="title"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleListChange}
            value={this.state.listName}
          />
        </form>
      </header>
    );
  }
}