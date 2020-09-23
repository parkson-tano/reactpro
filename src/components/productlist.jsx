import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CardColumns, CardDeck, Container, Jumbotron, Row } from "react-bootstrap";
import { Card, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBar from "./navbar";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: "*********",
    };
  }

  updateContact = () => {
    this.setState((state) => {
      return {
        contact: "674128573",
      };
    });
  };

  render() {
    return (
      <Jumbotron>
        <Row>
            <Col variant = 'col-sm-3'>
                      <Card style = {{width:'19rem'}}>
            <Card.Img
              variant="top"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704"
              alt="img"
            />
            <Card.Body>
              <Card.Title>Iphone 7s</Card.Title>
              <Card.Text>
                <p>Uploaded by Daniel Tano</p>
              </Card.Text>
              <Card.Footer>
                                <Button variant="info" onClick={this.updateContact}>
                {this.state.contact}
              </Button>
              <Button variant='info' className='ml-2'>
                  Add to cart
              </Button>
              </Card.Footer>

            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default ProductList;
