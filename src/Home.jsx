import { useContext } from "react"
import "./style/Home.css"
import { useNavigate } from "react-router-dom"
import apicontext from "./context/apicontext"

export default function Home () {
  let navigate = useNavigate()
  const apidata = useContext(apicontext)
  
  function handlesubmit (e) {
    e.preventDefault()
    let formdata = new FormData(e.target)
    let Category = formdata.get("Category")
    let Difficulty = formdata.get("Difficulty")
    apidata.setapi([ Category , Difficulty ])
  }
    
    return (
        <>
          <div className="Home-block">
            <h1>🧠 QuizMaster</h1>
            <p>Test Your Knowledge!</p>
            <p>Choose a category & begin.</p>
            <form onSubmit={handlesubmit}>
            <div className="catogory">Category : <select name="Category" id="Category">
                <option value="general_knowledge">General knowledge</option>
                <option value="music">Music</option>
                <option value="sport_and_leisure">Sport and leisure</option>
                <option value="history">History</option>
                <option value="geography">Geography</option>
                </select>
            </div>

            <div className="Difficulty">Difficulty : <select name="Difficulty" id="Difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                </select>
            </div>

            <button className="start-quiz" type="submit" onClick={() => {
              navigate("/Que")
            }}>Start Quiz</button>
            </form>
          </div>
        </>
    )
}