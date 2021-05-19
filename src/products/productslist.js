import React, {Component} from "react";
import DummyData from "./dummydata.json";
import ProductDetail from "./productdetail";

class ProductsList extends Component{
    render(){
        return(
            <div>
                {
                    DummyData.map(item => {return <ProductDetail p={item}/>})
                }
            </div>
    )}
}
export default ProductsList;
