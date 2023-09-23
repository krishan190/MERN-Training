const { useState } = require("react")

function Form()
{
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [Country,setCountry]=useState("");
  
  function submitForm(e)
  {
    e.preventDefault();
    console.log(name,age,Country);
  }
  
    return(
      <div>
        <h1>My name is {name}</h1>
        <h1>My age is {age}</h1>
        <h1>My country is {Country}</h1>
   
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
          <input type="Number" placeholder="Enter Number" onChange={(e)=>setAge(e.target.value)}></input><br></br>
          {/* <input type="text" placeholder="Enter name" onChange={(e)=>setCountry(e.target.value)}></input><br></br> */}
          
          <select onChange={(e)=>setCountry(e.target.value)}>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
            <option>Japan</option>
            <option>USA</option>
          </select>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    )
}

export default Form