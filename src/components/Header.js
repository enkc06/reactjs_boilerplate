import React, { Component } from "react";

import Logo from "./common/logo";
import SearchBar from "./search/SearchBar";
import MenuContainer from "./menu/MenuContainer";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <SearchBar />
        <MenuContainer />
      </header>
    );
  }
}

// export default Header;

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({}, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
