import { useState } from "react"

function College1() {
    // const [id, setId] = useState();
    const [rollno, setRollno] = useState();
    const [name, setName] = useState();
    const [marks, setMarks] = useState();

    function submitData() {
        let data1 = { rollno,name, marks }
        fetch("http://localhost:1000/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data1)
        }).then((result) => {
            result.json().then((data) => {
                console.log(data);
            })
        })
// console.log(id,rollno,Name,marks);
    }
    return (
        <div>
            {/* <input type="number" placeholder="Enter id" onChange={(e) => setId(e.target.value)}></input><br></br> */}
            <input type="number" placeholder="Enter RollNo" onChange={(e) => setRollno(e.target.value)}></input><br></br>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}></input><br></br>
            <input type="number" placeholder="Enter marks" onChange={(e) => setMarks(e.target.value)}></input><br></br>
            <button onClick={submitData}>Submit</button>
        </div>
    )
}
export default College1