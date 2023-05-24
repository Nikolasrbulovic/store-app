import { ListGroup } from "bootstrap-4-react/lib/components";
import SearchBar from "./SearchBar";

import ListGroupItem from "bootstrap-4-react/lib/components/listGroup/ListGroupItem";
import { useState } from "react";

const AppProducts = ({ products, searchProducts }) => {
  return (
    <div>
      <ListGroup>
        {products.map((product, key) => {
          return <ListGroupItem key={key}>{product.name}</ListGroupItem>;
        })}
      </ListGroup>
      <SearchBar searchProducts={searchProducts}></SearchBar>
    </div>
  );
};
export default AppProducts;
