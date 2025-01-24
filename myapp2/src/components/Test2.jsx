import {useState} from 'react'
function Test2(){    
    let [name,updateName]=useState("Pranit")
    return(
        <div>
        <h2>name of the student is: {name}</h2>       
<button onClick={()=>updateName("Pranit Gharat")}>State</button>
        </div>
    )
}
export default Test2;