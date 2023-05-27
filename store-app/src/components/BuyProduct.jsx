import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Select from 'react-select'
import { useState } from "react";
const BuyProduct = ({appCustomers, products,buyProduct,productDecrementHandler}) =>{
    const productId = useParams().id;
    const product = products[productId];
    const navigate = useNavigate()
    const [option, setOption] = useState({value: '', name: ''});
    
    const goBackToProducts = () =>{
        return navigate("/products");
    }
    const options = () =>{
        const optionNames=[]
         appCustomers.forEach((customer,index)=>{
            return optionNames.push({value: index, label : customer.name})
        })
       
        return optionNames;
    }
    const selectOptionsHandler = (e) =>{
       
        setOption({value: e.value, name: e.label})
       
    }
    const buyProductHandler = () =>{
        
        if(option.name){
           buyProduct(option.value,product.name,productId)
           productDecrementHandler(productId);
        }else{
            alert("Please select a Customer");
        }
       
    }
    

    return(
      <>
           {product.quantity ? <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Product Info</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.name}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Select options={options()} className="mb-2" onChange={(e) => selectOptionsHandler(e)}></Select>
                <Button onClick={buyProductHandler}>Confirm</Button>{' '}
                <Button className="btn btn-danger" onClick={goBackToProducts}>Cancel</Button>
            </Card.Body>
        </Card>:
        <Button onClick={goBackToProducts}>Go back to Products</Button>
        }
        </>
      
    )

}

export default BuyProduct;