import s from './Searchbar.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

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
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleOnSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}></span>
          </button>
          <input
            onChange={this.onChange}
            value={this.state.name}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          ></input>
        </form>
      </header>
    );
  }
}

export default Searchbar;
