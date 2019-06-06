import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log('You clicked me on the image container')}
          >
            <Link to="/details">
              <img src={img} alt="Product image" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log('Added to cart');
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In cart
                </p>
              ) : (
                <i className="fa fa-cart-plus" />
              )}
            </button>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">£{price}</span>
          </h5>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.1);
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--light-blue);
    border: 0;
    color: var(--main-white);
    font-size: 1.4rem;
    border-radius: 0.3rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--main-blue);
    cursor: pointer;
  }
`;
