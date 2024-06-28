import React from "react";

//how to display array as a list in jsx
function List () {

    const products = [
        {title: 'cat pictures', id: 1},
        {title: 'Garlic', id: 2},
        {title: 'meow', id: 3},
    ];

    const listProducts = products.map(product =>
        <li key = {product.id}>
            {product.title}
        </li>
    );
    return (
        <ul>{listProducts}</ul>
    );
}

export default List;