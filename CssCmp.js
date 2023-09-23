import "./style.css"
import xyz from "./abc.module.css"
function CssCmp()
{
    return(
        <div>
            <h1 style={{backgroundColor:"red",color:"white"}}>Inline CSS</h1>
            <h1 className="hello">Normal CSS</h1>
            <h1 className={xyz.hello1}>Moduler css</h1>
        </div>
    )
}
export default CssCmp