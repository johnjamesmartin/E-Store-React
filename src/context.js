import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider

// Consumer

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: storeProducts,
      detailProduct: detailProduct
    };
    this.handleDetail = this.handleDetail.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  handleDetail = () => {
    console.log('Hello from detail');
  };
  addToCart = () => {
    console.log('Hello from add to cart');
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
