import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCatListData } from '../actions/actions';

class CatContent extends Component {
  incriseaClickHandler(currentCat, catIndex) {
    currentCat.clickCount++;
    catListData[catIndex] = currentCat;
  }

  render() {
    console.log(this.props);
    let { currentCat, catIndex, catListData } = this.props;

    return (
      <div className="content">
        <h3 className="title">{ currentCat.name }</h3>
        <img
          src={ currentCat.src }
          className="image-responsive"
          alt={ currentCat.imgAttribution }
          onClick={ () => {
            this.incriseaClickHandler(currentCat, catIndex);
            updateCatListData(catListData);
          }}
        />
        <h4>count: { currentCat.clickCount }</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCat: state.currentCat,
  catIndex: state.catIndex,
  catListData: state.cateListData,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateCatListData }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CatContent);
