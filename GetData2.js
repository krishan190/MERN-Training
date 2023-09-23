import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
// import Nav from "./Nav";
import Nav from 'react-bootstrap/Nav';
// import Card from "./Card";
import Card1 from "./Card1";


function GetData2() {
    const [apidata, setapidata] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((result) => {

            result.json().then((data) => {
                setapidata(data);
            })
        })
    }, [])
    return (
        // <div>
        //     <h1>Get Data</h1>
        // </div>

        <div>
            <Nav defaultActiveKey="/home" as="ul" style={{backgroundColor:"black", fontSize:"20px"}}>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Proudct</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Laptops</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">TV Accessories</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* <Nav defaultActiveKey="/home" as="ul"></Nav> */}

            <Table striped bordered hover variant="dark">
                <tbody>
                    {/* <tr>
                        <td>Home</td>
                        <td>About</td>
                        <td>Shopping</td>
                        <td>URL</td>
                        <td>Item</td>
                        <td>category</td>
                        <td>image</td>
                        <td>rating</td>
                    </tr> */}
                    {
                        apidata.map((item) =>
                            // <tr>
                            //     <td>{item.id}</td>
                            //     <td>{item.title}</td>
                            //     <td>{item.price}</td>
                            //     <td>{item.description}</td>
                            //     <td>{item.category}</td>
                            //     <td>{item.rating}</td>
                            // </tr>
                                <img src={item.image}  height={200} width={200} style={{margin: "20px", padding:"30px"}}></img>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default GetData2