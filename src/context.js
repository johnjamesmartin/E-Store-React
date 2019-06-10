import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider

// Consumer

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0
    };
    this.handleDetail = this.handleDetail.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setProducts = this.setProducts.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts() {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  }

  getItem(id) {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail(id) {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: product
      };
    });
  }

  addToCart(id) {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  openModal(id) {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      };
    });
  }

  closeModal() {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  }

  increment(id) {
    //
  }

  decrement(id) {
    //
  }

  removeItem(id) {
    //
  }

  clearCart() {
    //
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          setProducts: this.setProducts,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
