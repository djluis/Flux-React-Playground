/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/catalog/app-catalog.js');
var Cart = require('../components/cart/app-cart.js');
var Navbar = require('../components/app-navbar.js');
var Router = require('react-router-component');
var CatalogDetail = require('./product/app-catalogdetail.js');
var Template = require('./app-template.js');

var Locations = Router.Locations;
var Location = Router.Loccation;

var APP =
  React.createClass({
    render:function(){
      return (
      	<Template>
          <Locations>
            <Location path="/" handler={Catalog} />
            <Location path="/cart" handler={Cart} />
            <Location path="/item/:item" handler={CatalogDetail} />
          </Locations>
        </Template>
      	)
    }
  });
module.exports = APP;