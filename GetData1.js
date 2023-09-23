import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
function GetData1()
{
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos").then((result)=>
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
                    <td>albumId</td>
                    <td>Id</td>
                    <td>title</td>
                    {/* <td>URL</td> */}
                    <td>thumbnailUrl</td>
                </tr>
                {
                    apidata.map((item)=>
                    <tr>
                        <td>{item.albumId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        {/* <td>{item.url}</td> */}
                        <td><img src={item.thumbnailUrl}></img></td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
      )
}
export default GetData1