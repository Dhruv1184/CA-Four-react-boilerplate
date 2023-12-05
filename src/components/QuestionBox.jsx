import React from 'react'
import style from './Question.module.css'
import { useRef , useState, useEffect} from 'react'
import questions from '../questions'
import Result from './Result'
import { createContext } from 'react'

export const ScoreBoard = createContext()
function QuestionBox() {
  const [count,setcount] = useState(1)
  const que = questions[count-1]
  const [HighlightColor , setHigh] = useState(true)
  const [bColor , setcolor] = useState(true)
  // const [redirect , setredirect]= useState(false)
  let HighliteRef = useRef()
  const [score, setscore] = useState(0)

  function highlightChange(){
    setHigh(false)
  }

  function BackGroundColor(){
    setcolor(!bColor)
  }

  function ChangeCount(correct){
    if(count < questions.length+1){
      setcount(count+1)
    }

    if(correct){
      setscore(score+1)
    }
    console.log(score)
  }

  function removeHighlight(){
    setHigh(true)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = bColor? '#373a3a' : '#bbb4b487'
  })


  return (
    <>
    {(count > questions.length) ? 
      
      <div>
          <ScoreBoard.Provider value={{ score, setscore , setcount}}>
            <Result /> 
          </ScoreBoard.Provider>
      </div>
      :
    <div>
      <button className={style.toggle} onClick={BackGroundColor}  >{bColor? 'Light':'Dark'}</button>
      <div className={style.Div}>

        <h1 className={style.heading} >Question</h1>

        <h1 className={style.question} ref={HighliteRef} style={{color:HighlightColor? 'Red' : 'darkblue' }}>{que.text}</h1>

        <h1 className={style.Number}>{count}/5</h1>

        <div className={style.choose}>
        {que.options.map((item,index)=>{
              return(
              <div className={style.option} 
                    style={{backgroundColor: bColor? 'black' : 'white',color: bColor? 'white' : 'black'}} 
                    onClick={()=>ChangeCount(item.isCorrect)} key={index}>
                      
                {item.text}
              </div>
              )
        })}
        </div>
        <button className={style.Highlight1} onClick={highlightChange} >Highlight</button>
        <button className={style.Highlight} onClick={removeHighlight}>Remove Highlight</button>
      </div>
      
    </div>
  
  
      }
    </>
  )
  
}

export default QuestionBox