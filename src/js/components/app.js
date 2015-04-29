/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/catalog/app-catalog.js');
var Cart = require('../components/cart/app-cart.js');
var Navbar = require('../components/app-navbar.js');

var APP =
  React.createClass({
    render:function(){
      return (
      	<div>
        <Navbar />
      	<h1>Lets Shop</h1>
      	<Catalog/>
      	<h1>Cart</h1>
      	<Cart />
      	</div>
      	)
    }
  });
module.exports = APP;