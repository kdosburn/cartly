import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 9;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Card = styled.button`
  font-family: 'Lato', sans-serif;
  border-radius: 3px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  max-width: 300px;
  margin: 10px;
`;

const Button = styled.div`
  border-radius: 3px;
  padding: 5px;
  margin: 0 auto;
  background: transparent;
  color: black;
  border: 1px solid #ccc;
  width: 100px;
`;

function CartOverlay(props) {
  if (!props.show) {
    return null;
  }

  return (
    <Overlay>
      {props.cart.map((product) => {
        return (
          <h3>{product.name}</h3>
          )
      })}
    </Overlay>

  );
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = { cart: [], data: [], value: 0, showCart: false }
    this.addToCart = this.addToCart.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  getProducts(){
    fetch('https://raw.githubusercontent.com/Sellbrite/fe-sample-project/master/product-payload.json')
      .then(response => response.json())
      .then(data => {
        this.setState({data: data.products})
      })
      .catch(err => console.err(this.props.url))
  }

  componentDidMount(){
    this.getProducts()
  }

  addToCart(product){
    console.log('product', product);
    this.setState((prevState) =>
      { cart: prevState.cart.push(product)});
    this.updateTotal();
  }

  updateTotal(){
    console.log('cart', this.state.cart);
    let itemsInCart = this.state.cart.length;
    console.log(itemsInCart);
    this.setState({ value: +1 });
  }

  showCart(){
    console.log('SHOWING CART!!!');
    console.log(this.state.cart);
    this.setState(prevState => ({
      showCart: !prevState.showCart
    }));
  }


  render() {
    const showCart = this.state.showCart;
    const cart = this.state.cart;
    return (
      <div className="App">
        <div className="nav-bar">
          <div className="nav-bar-name">Cart.ly</div>
          <div className="nav-bar-cart"><span onClick={() => this.showCart()}>My Cart </span> {this.state.value}</div>
        </div>
        <CartOverlay show={this.state.showCart} cart={this.state.cart}/>
        <div>
        {this.state.data.map((product) =>{
          return (
            <Card key={product.filename}>
              <img src={"https://raw.githubusercontent.com/Sellbrite/fe-sample-project/master/images/" + product.filename} width="100%"/>
              <h3>{product.name}</h3>
              <h1>${(product.price * .01).toFixed(2)}</h1>
              <Button onClick={()=> this.addToCart(product)}>Add to Cart</Button>
            </Card>
          )
        })}
      </div>
      </div>
    );
  }
}

export default App;
