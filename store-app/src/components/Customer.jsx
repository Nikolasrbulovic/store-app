import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';


const Customer = ({appCustomers}) =>{
const customerIndex = useParams().id;
const customer = appCustomers[customerIndex]
return(
    <ListGroup className="w-50">
        <ListGroup.Item>Customer name : {customer.name}</ListGroup.Item>
        {customer.productList.map((product,key)=>
           { if(product.quantity>0){
             return   <ListGroup.Item key={key} variant="info">{product.name}{' '} Quantity: {product.quantity}</ListGroup.Item>
            }
        }
        )}
      
    </ListGroup>
)
}
export default Customer;