import apicontext from "./context/apicontext"
import { useContext, useEffect, useRef, useState } from "react"
import "./style/Que.css"
import { useNavigate } from "react-router-dom"

export default function Que () {

    const navigate = useNavigate()
    const { api , setapi , apidata , setapidata} = useContext(apicontext)
    const [ noque , setnoque ] = useState(0)
    const [ ansarr , setansarr ] = useState([])
    const [ clicked , setclicked ] = useState(true)
    
    
    function Otions() {
        const optionref = useRef()
        
        let wrongarr = apidata[noque].incorrectAnswers
        let correctAnswer = apidata[noque].correctAnswer
        let demoarr = [...wrongarr , correctAnswer]
        let randomindex = new Set()
        while (randomindex.size < 4) {
            randomindex.add( Math.floor( Math.random() * 4) )
        }
        let randomindexarr = [...randomindex]
        let mainarr = [];
        for (let i of randomindexarr) {
            mainarr.push(demoarr[i])
        }
        
        function optionclick (index) {
            optionref.current.children[0].style.background = "none"
            optionref.current.children[1].style.background = "none"
            optionref.current.children[2].style.background = "none"
            optionref.current.children[3].style.background = "none"
            optionref.current.children[index].style.background = "lightblue"
            ansarr[noque] = optionref.current.children[index].innerText
        }
        return (
            <>
            <div className="options" ref={optionref}>
                {mainarr.map(( x , index) => {
                   return  <div key={index} className="option" onClick={() => {
                    optionclick(index)
                   }} >{x}</div>
                })}
            </div>
            </>
        )
    }

    return (
        <>
        { apidata && 
        <div className="que-block">
            <div className="color-que">Q{noque+1} of Q10</div>
            <div className="que-block-text">

                <div className="que-text">
                    {noque<10 && `Q${noque+1} ${apidata[noque].question.text}`}
                </div>

                <div className="brdiv"></div>

                <Otions />

                <div className="addsub">

                <button onClick={() => {
                    if (noque == 9) {
                        let score = 0;
                        for (let i in apidata) {
                            if(ansarr[i] == apidata[i].correctAnswer) {
                                score++
                            }
                        }
                        navigate("/Score" , {state:{score}})
                    }

                    if (noque < 9) {    
                        setnoque(x => x+1)
                    }
                }}>{noque < 9 ? "Next >>" : "Done"}</button>
        
                </div>
            </div>
        </div>
        }

        
        </>
    )
}