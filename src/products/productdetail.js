import React, {Component} from "react";

class ProductDetail extends Component{
    render(){
        const p = this.props.p
        return(
            <div>
                <h4>{p.name}</h4>
                <h4>{p.category}</h4>
                <h4>{p.description}</h4>
            </div>
        )
    }
}

export default ProductDetail;