import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field" id="header-user">
          { !email
            ? 'Sua Conta'
            : email }
        </p>
        <p data-testid="total-field" id="header-expenses"> 0 </p>
        <p data-testid="header-currency-field" id="header-currency"> BRL </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
