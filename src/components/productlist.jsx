import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from './product';
import Title from './title';
import {storeProduct} from '../data';
import {
  CardColumns,
  CardDeck,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";
import { Card, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBar from "./navbar";
import { ProductConsumer } from "../context";
class ProductList extends Component {
  state = {
      product : storeProduct
    };

  render() {
    console.log(this.state.product);
    return (
      <React.Fragment>
        <div className="py-5">
        <div className="container">
          <Title name='our' title='product' />
          <div className="row">
            <ProductConsumer>
              {
                value => {
                  console.log(value);
                }
              }
            </ProductConsumer>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
