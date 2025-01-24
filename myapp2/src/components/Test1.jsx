import { useState } from "react";

function Test1(){  
    let [counter, updateCounter]=useState(0)
    return(
        <div>
            <h2>counter variable value is:{counter} </h2>
            
            <button onClick={()=>updateCounter(++counter)}>increment</button>
            <button onClick={()=>updateCounter(--counter)}>decrement</button>
        </div>
    )
}
export default Test1;