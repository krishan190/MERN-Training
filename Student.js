import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
function Student()
{
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/student").then((result)=>
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
                    <td>id</td>

                    <td>Name</td>
                    <td>Marks</td>
                </tr>
                {
                    apidata.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
      )
}
export default Student