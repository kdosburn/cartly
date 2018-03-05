import React, { Component } from 'react';

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
					<div key={product.filename}>
						<img src={"https://raw.githubusercontent.com/Sellbrite/fe-sample-project/master/images/" + product.filename} />
						<h3>{product.name}</h3>
						<h1>${(product.price) * .01}</h1>
						<div onClick={() => this.addToCart(product.filename)}>add to cart</div>
					</div>
				)
			})}
			</div>
		)
	}
}

export default Products;