import {Container ,Row,Col} from "react-bootstrap"
import Card from "./Card.jsx";
import { useState,useEffect } from "react";
export default function Details(){
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        getData();
    },[]);
    async function getData() {
        let data=await fetch("https://dummyjson.com/products/category/beauty");
        let final_data=await data.json();
        setProducts(final_data.products);
    
        
    }
    return(
        <Container>
            <Row>
                {
                    products.map((item)=>(
                        <Col md={4} className="mb-4" key={item.id}>
                            <Card product={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}
