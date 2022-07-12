import { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBarHeader } from './Searchbar.styled';
import { SearchButton } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchLabel } from './Searchbar.styled';
import { SearchInput } from './Searchbar.styled';

class Searchbar extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  state = {
    name: '',
  };

  onChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      name: value.toLowerCase(),
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleOnSubmit}>
          <SearchButton type="submit">
            <SearchLabel></SearchLabel>
          </SearchButton>
          <SearchInput
            onChange={this.onChange}
            value={this.state.name}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></SearchInput>
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

export default Searchbar;
