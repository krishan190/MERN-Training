function Child(prop)
{
    var data="Krishna"
    return(
        <div>
            <button onClick={()=>prop.name(data)}>Submit</button>
        </div>
    )
}
export default Child