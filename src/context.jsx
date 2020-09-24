import React, { Component } from "react";
import { storeProduct, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        product: storeProduct,
        datail: detailProduct,
    };

    handleDetail = () => {
        console.log('hello from details');
    };

    addToCart = () => {
        console.log('add to cart');
    };

  render() {
    return (
            <ProductContext.Provider value= {{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
            }} >
                {this.props.children}
            </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };