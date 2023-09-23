import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
function College()
{
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/").then((result)=>
        {
            result.json().then((data)=>{
                setapidata(data);
            })
        })
    },[])
      return(
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>User Id</td>
                    <td>name</td>
                    <td>Rollno</td>
                    <td>Marks</td>
                </tr>
                {
                    apidata.map((item)=>
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.rollno}</td>
                        <td>{item.marks}</td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
      )
}
export default College