import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
function GetData()
{
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>
        {
            // console.log(result);
            result.json().then((data)=>{
                // console.log(data);
                setapidata(data);
            })
        })
    },[])
      return(
        // <div>
        //     <h1>Get Data</h1>
        // </div>
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>User Id</td>
                    <td>Id</td>
                    <td>title</td>
                    <td>Body</td>
                </tr>
                {
                    apidata.map((item)=>
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
      )
}
export default GetData