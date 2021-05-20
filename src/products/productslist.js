import React, {Component} from "react";
import ProductDetail from "./productdetail";
import ProductForm from "../productform";
import axios from "axios";



class ProductsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productsData:[],
            product: "",
            showComponent: false,
        };
        this.getProductDetail = this.getProductDetail.bind(this);
        this.showProductDetails = this.showProductDetails.bind(this);
    }

    getProductDetail(item){
    axios.get("http://localhost:8000".concat(item.absolute_url))
        .then((response) => {
        this.setState({product: response.data})
            console.log(response.data)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    showProductDetails(item){
        this.getProductDetail(item);
        this.setState({showComponent : true});
    }

    componentDidMount() {
        axios.get('http://localhost:8000/findprice/products')
            .then((response) =>{
                this.setState({productsData:response.data})
            })
            .catch(function (error){
            console.log(error);
        })

    }

    render(){
        return(
            <div>
                <ProductForm/>
                {this.state.productsData.map(item => {
                    return (
                        <h3 key={item.id} onClick={() => this.showProductDetails(item)}>
                            {item.product_name}
                        </h3>
                    );
                })}
                {this.state.showComponent ? (
                    <ProductDetail productDetail = {this.state.product}/>
                ) : null}

            </div>
        );
    }
}
export default ProductsList;

