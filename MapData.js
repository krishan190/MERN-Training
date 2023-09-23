import Table from 'react-bootstrap/Table';
function MapData()
{
    // var arr=["Ram","syam","Krishan","Shubham","Deepak"];
    var arr=[{rollno:101,name:"kUjar",marks:45},
    {rollno:104,name:"shsusju",marks:85},
    {rollno:151,name:"ssss",marks:75},
    {rollno:106,name:"Malpani",marks:35}]

    return(
        <div>
            <Table striped bordered hover variant="dark">
            <tbody>
                    <tr>
                        <th>key</th>
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>Marks</th>
                    </tr>
    
                    {
                        arr.map((item,k)=>
                         item.marks>=40?
                         <tr key={k}>
                            <td>{k}</td>
                            <td>{item.rollno}</td>
                            <td>{item.name}</td>
                            <td>{item.marks}</td>
                         </tr>:null
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default MapData