import { useEffect, useState } from "react";
import Apicontext from "./apicontext";

function ApicontextProvider ({children}) {

    const [ api , setapi ] = useState([ "general_knowledge" , "easy" ])
    const [ apidata , setapidata ] = useState()


    useEffect( () => {

        try {
        fetch(`https://the-trivia-api.com/v2/questions?limit=10&categories=${api[0]}&difficulty=${api[1]}`)
        .then(res => res.json())
        .then(res => setapidata(res))
        } 
        
        catch (error) {
            console.log(error);
        }
        
    } , [api])

    return (
        <>
        <Apicontext.Provider value={{ api , setapi , apidata , setapidata}}>
            {children}
        </Apicontext.Provider>
        </>
    )
}


export default ApicontextProvider


