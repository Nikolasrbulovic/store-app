import { ListGroup } from "bootstrap-4-react/lib/components";
import SearchBar from "./SearchBar";
import Button from "react-bootstrap/Button";

import ListGroupItem from "bootstrap-4-react/lib/components/listGroup/ListGroupItem";
import { Link } from "react-router-dom";


const AppProducts = ({ products, searchProducts,productIncrementHandler,productDecrementHandler }) => {


  return (
    <div>
      <ListGroup className="w-50">
        {products.map((product, key) => {
          return (
            <ListGroupItem key={key}>{product.name}{' '}
              <Button size="sm" onClick={()=> productIncrementHandler(key)}>+</Button>{' '}
              <Button size="sm" onClick={()=> productDecrementHandler(key)} disabled={!product.quantity}>-</Button>{' '}
              
              <Link to={`${key}`}>
              <Button>Buy</Button>
              </Link>
              
              Quantity : {product.quantity}
            </ListGroupItem>
            
          )
        })}
      </ListGroup>
      
      <SearchBar searchProducts={searchProducts}></SearchBar>
    </div>
  );
};
export default AppProducts;
