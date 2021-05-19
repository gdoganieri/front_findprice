import React, {Component} from "react";

class ProductDetail extends Component{
    render(){
        const obj = this.props.productDetail;
        return(
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.name}</h4>
                <h5>Category: {obj.category}</h5>
                <p>Descriprion: {obj.description}</p>
            </div>
        );
    }
}

export default ProductDetail;