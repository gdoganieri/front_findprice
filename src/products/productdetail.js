import React, {Component} from "react";
import ProductUpdate from "./productupdate";
import axios from "axios";


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateProductDetails = this.updateProductDetails.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    updateProductDetails() {
        this.setState({showComponent: true})
    }

    deleteProduct(obj) {
        console.log(obj);
        axios.delete("http://127.0.0.1:8000".concat(obj))
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const obj = this.props.productDetail;
        return (
            <div style={{color: "yellow", border: "1px solid yellow"}}>
                <h4>{obj.product_name}</h4>
                <h5>Category: {obj.category}</h5>
                <p>Descriprion: {obj.description}</p>
                <button style={{backgroundColor: "white"}} onClick={() => this.updateProductDetails()}>
                    Update
                </button>
                {this.state.showComponent ? <ProductUpdate productUpdate={obj}/> : null}
                <button style={{backgroundColor: "white"}} onClick={() => this.deleteProduct(obj.delete)}>
                    Delete
                </button>
            </div>
        );
    }
}

export default ProductDetail;