import React from "react";
import {
    Link,
    BrowserRouter as Router
} from "react-router-dom";
import styled from "styled-components";
export default class Product extends React.Component {
    render() {
        const {
            id,
            title,
            img,
            price,
            inCart
        } = this.props.product;
        return ( <
            ProductWrapper clasName = "col-9 mx-auto col-md-6 col-lg-3 my-3" >
            <
            div className = "card" >
            <
            div className = "img-container p-5" >
            <
            Router >
            <
            Link to = "/details" >
            <
            img src = {
                img
            }
            alt = "product"
            className = "card-img-top" / >
            <
            /Link>{" "} < /
            Router > {
                " "
            } <
            button className = "cart-btn"
            disabled = {
                inCart ? true : false
            } > {
                " "
            } {
                inCart ? ( <
                    p className = "text-capitalize mb-0" > In Cart < /p>
                ) : ( <
                    i class = "fas fa-cart-plus" > < /i>
                )
            } {
                " "
            } <
            /button>{" "} < /
            div > {
                " "
            } <
            div className = "card-footer d-flex justify-content-between" >
            <
            p className = "align-self-center mb-0" > {
                title
            } < /p>{" "} <
            h5 className = "text-blue mb-0" >
            <
            span className = "mr-1" > $ < /span> {price}{" "} < /
            h5 > {
                " "
            } <
            /div>{" "} < /
            div > {
                " "
            } <
            /ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div `
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 1px solid rgb(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgb(0, 0, 0, 0.8);
    }
    .img-container {
      position: relative;
      overflow: hidden;
    }
    .card-img-top {
      transition: all 1s linear;
    }
    .img-container:hover {
      transform: scale(1.2);
    }
    .cart-btn {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;