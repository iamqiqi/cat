import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCat, setAdminFilter } from '../actions/actions';
import { ADMIN_EDITING_VISIBILITY } from '../actions/ActionTypes';

const { SHOW_ADMIN, SHOW_EDITING } = ADMIN_EDITING_VISIBILITY;
let nameInput;
let srcInput;
let attrInput;

class CatContent extends Component {
  incriseaClickHandler(catListData, catIndex) {
    let clickCount = catListData[catIndex].clickCount;
    clickCount += 1;
    let fieldsToUpdate = { clickCount };
    this.props.updateCat(catIndex, fieldsToUpdate);
  }

  saveCatHandler(catData, catIndex) {
    let fieldsToUpdate = {};
    if (catData.name !== nameInput.value) {
      fieldsToUpdate.name = nameInput.value;
    }
    if (catData.imgSrc !== srcInput.value) {
      fieldsToUpdate.imgSrc = srcInput.value;
    }
    if (catData.imgAttribution !== attrInput.value) {
      fieldsToUpdate.imgAttribution = attrInput.value;
    }
    if (fieldsToUpdate.length !== 0) {
      this.props.updateCat(catIndex, fieldsToUpdate);
    }
    this.props.setAdminFilter(SHOW_ADMIN);
  }

  showEditingHandler() {
    this.props.setAdminFilter(SHOW_EDITING);
  }

  cancelEditingHandler() {
    this.props.setAdminFilter(SHOW_ADMIN);
  }

  render() {
    let { catIndex, catListData, adminEditingFilter } = this.props;
    let currentCat = catListData[catIndex];
    return (
      <div className="content">
        <h3 className="title">{ catListData[catIndex].name }</h3>
        <img
          src={ catListData[catIndex].imgSrc }
          className="image-responsive"
          alt={ catListData[catIndex].imgAttribution }
          onClick={ () => {
            this.incriseaClickHandler(catListData, catIndex);
          }}
        />
        <h4>count: { catListData[catIndex].clickCount }</h4>
        { adminEditingFilter === SHOW_ADMIN &&
          <button onClick={ () => this.showEditingHandler() }>admin</button>
        }
        { adminEditingFilter === SHOW_EDITING &&
          <div>
            <form onSubmit={ (e) => { e.preventDefault(); this.saveCatHandler(currentCat, catIndex); } }>
              <label>
                name:
                <input
                  name="name"
                  defaultValue={ currentCat.name }
                  ref={ input => { nameInput = input; } }
                  onChange={ name => this.setState({ name }) }
                />
              </label>
              <label>
                image source:
                <input
                  name="imgSrc"
                  defaultValue={ currentCat.imgSrc }
                  ref={ input => { srcInput = input; } }
                  onChange={ imgSrc => this.setState({ imgSrc }) }
                />
              </label>
              <label>
                image attr:
                <input
                  name="imgAttr"
                  defaultValue={ currentCat.imgAttribution }
                  ref={ input => { attrInput = input; } }
                  onChange={ imgAttribution => this.setState({ imgAttribution }) }
                />
              </label><br />
              <input type="submit" value="save" />
            </form>
            <button onClick={ () => this.cancelEditingHandler() }>cancel</button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catIndex: state.catIndex,
  catListData: state.catListData,
  adminEditingFilter: state.adminEditingFilter,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateCat, setAdminFilter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CatContent);
