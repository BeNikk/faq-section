import { useEffect, useState } from "react";

function Faq(){
    const[display,setDisplay]=useState('+');
    const [value,setValue]=useState(false);
    function func(){


        setValue(!value)
    }

    useEffect(()=>{
        if(value==true){
            setDisplay('-');

        }
        else{
            setDisplay('+');
        }
        

    },[value])
        return(
            <>

        <div className="flex items-center justify-between w-[500px] h-[50px] bg-gray-200">
            <p>is this product good to purchase</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={func}>{display}</button>
            
        </div>

        {value &&
        <div className="h-auto w-[500px] bg-black text-white p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde quo rem esse aliquam?

        </div>
        }
            </>

    )

}
export default Faq;