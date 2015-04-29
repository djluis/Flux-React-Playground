/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var Increase =
  React.createClass({
    handleClick:function(){
      AppActions.increaseItem(this.props.index);
    },
    render:function(){
      return <button className="btn btn-default" onClick={this.handleClick}>+</button>
    }
  });
module.exports = Increase;