import "./style/Score.css"
import apicontext from "./context/apicontext"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

export default function Score () {

    const location = useLocation()
    const { apidata } = useContext(apicontext)
    const { score } = location.state

    return (
        <>
        <div className="score">
            <h1>Your Score : {score}</h1>
        </div>
        </>
    )
}



