import React from 'react'
import styling from './Result.module.css'
import { useContext } from 'react'
import { ScoreBoard } from './QuestionBox'
import { useState } from 'react'
import { useEffect } from 'react'

function Result() {
  const {score, setcount,setscore} = useContext(ScoreBoard)
  const [bgColor , setscolor] = useState(true)

  function BackGroundColor(){
    setscolor(!bgColor)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor? '#373a3a' : '#bbb4b487'
  })

  function HandleReset(){
    setcount(1)
    setscore(0)
  }
  return (
    <>
      <button className={styling.toggle} onClick={BackGroundColor}  >{bgColor? 'Light':'Dark'}</button>
      <div className={styling.Div}>
          <h1 className={styling.head}>Result</h1>
          <h2>Your Score:- {score} out of 5 ({(score/5)*100}%) </h2>
          <button className={styling.btn} onClick={HandleReset} >Restart</button>
      </div>
      </>
    
  )
}
export default  Result