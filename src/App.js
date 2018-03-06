import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { cart: [] }
    this.addToCart = this.addToCart.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }

  addToCart(props){
    console.log('gettinghere', props);
    // console.log('product', product);
    // this.setState((prevState) =>
    //   { cart: prevState.cart.push(product)});
    // this.updateTotal();
  }

  updateTotal(){
    console.log('cart', this.state.cart);
    let itemsInCart = this.state.cart.length;
    console.log(itemsInCart);
  }


  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <div className="nav-bar-name">Cart.ly</div>
          <div className="nav-bar-cart">cart</div>
        </div>
        <Products onClick={()=> this.addToCart(this.state.props)} />
      </div>
    );
  }
}

export default App;
