import React, { useState } from 'react';

function Calculator(){
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const a=Number(value1)
    const b=Number(value2)  
    return(
        <div>
            <h1 style={{textDecoration:"underline"}}>Calculator </h1>
            <input type="number" placeholder="Enter the first value" value={value1} 
            onChange={(e) => setValue1(Number(e.target.value))} />
            <input type="number" placeholder="Enter the second value" value={value2} 
            onChange={(e) => setValue2(Number(e.target.value))} />
            <div style={{height:"140px", 
                        width:"200px", 
                        border:"5px inset black",
                        marginLeft:"260px",
                        marginTop:"20px",
                        backgroundColor:"lightblue"}}></div>
                        <p> <strong>Addition</strong> {a+b}</p>
                        <p> <strong>Subtraction</strong> {a-b}</p>
                        <p> <strong>Multiplication</strong> {a*b}</p>
                        <p> <strong>Division</strong> {a/b}</p>
                        </div>    
    );
}
            
export default Calculator;
