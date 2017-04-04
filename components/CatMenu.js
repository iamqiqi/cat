import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCatIndex } from '../actions/actions';

class CatMenu extends Component {
  catNameClickHandler(cat, index) {
    this.props.setCatIndex(index);
  }

  render() {
    const { catListData } = this.props;
    return (
      <ul className="menu" >
        {
          catListData.map((cat, index) => {
            return (
              <li
                key={ index }
                onClick={ () => this.catNameClickHandler(cat, index) }
              >
                { cat.name }
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  catListData: state.catListData,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setCatIndex }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CatMenu);
