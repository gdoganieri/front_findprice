import React from "react";
import axios from "axios";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: "",
            description: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.product_name);
        axios.post("http://127.0.0.1:8000/findprice/create/", {headers: {
    'Authorization': `token ${localStorage.getItem('token')}`
  }},{
            product_name: this.state.product_name,
            category: this.state.category,
            description: this.state.description,
        },
            )
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {
            product_name,
            category,
            description,
        } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Product name:
                    <input
                        type="text"
                        name="product_name"
                        value={product_name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ProductForm;