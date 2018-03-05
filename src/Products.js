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
		this.state = { data: [] }
	}

	getProducts(){
		fetch('https://raw.githubusercontent.com/Sellbrite/fe-sample-project/master/product-payload.json')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data.products})
			})
			.catch(err => console.err(this.props.url))
	}

	addToCart(product){
		console.log('product', product);
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
						<h1>${(product.price) * .01}</h1>
						<Button onClick={() => this.addToCart(product.filename)}>add to cart</Button>
					</Card>
				)
			})}
			</div>
		)
	}
}

export default Products;