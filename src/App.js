import React from 'react';
import {connect} from 'react-redux';

import {buyItem} from './actions/buyItem';
import {removeFeature} from './actions/removeFeature';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carType} />
        <AddedFeatures car={props.carType} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.carFeatures} buyItem={props.buyItem} />
        <Total car={props.carType} additionalPrice={props.extraPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    extraPrice: state.additionalPrice,
    carType: state.car,
    carFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps, {buyItem, removeFeature})(App);
