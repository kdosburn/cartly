import React, { Component } from 'react';
import styled from 'styled-components';

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

class Products extends Component {
	constructor(props){
		super(props)
		this.state = { data: [], cart: [] }
		this.addToCart = this.addToCart.bind(this);
		this.updateTotal = this.updateTotal.bind(this);
	}

	getProducts(){
		fetch('https://raw.githubusercontent.com/Sellbrite/fe-sample-project/master/product-payload.json')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data.products})
			})
			.catch(err => console.err(this.props.url))
	}

	updateTotal(){
		console.log('cart', this.state.cart);
		let itemsInCart = this.state.cart.length;
	}

	addToCart(product){
		console.log('product', product);
		this.setState((prevState) =>
			{ cart: prevState.cart.push(product)});
		this.updateTotal();
	}

	componentDidMount(){
		this.getProducts()
	}

	render(){
		return (
			<div>
			{this.state.data.map((product) =>{
				return (
					<Card key={product.filename}>
						<img src={"https://raw.githubusercontent.com/Sellbrite/fe-sample-project/master/images/" + product.filename} width="100%"/>
						<h3>{product.name}</h3>
						<h1>${(product.price * .01).toFixed(2)}</h1>
						<Button onClick={() => this.addToCart(product)}>Add to Cart</Button>
					</Card>
				)
			})}
			</div>
		)
	}
}

export default Products;