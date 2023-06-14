import { Component } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  Button,
  
  Input,
} from './Searchbar.styled';
 class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim()=== '') {
      toast.error('Search field is empty! Please enter a search word.');
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSearchSubmit}>
          <Button type="submit">
            <GoSearch size="20" />
            <span>Search</span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar