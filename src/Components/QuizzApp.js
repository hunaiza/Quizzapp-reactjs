import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList'
import Greeting from './UserGreeting'
import Questionaire from './Questionaire';

function Quizarea(props) {
    if(props.isFinished) {
        return <Greeting />
    }
    return(
        <div>
            <h2>QuizzArea</h2>
            <Question DataSet={props.DataSet} />
            <AnswerList DataSet={props.DataSet}/>
        </div>
    )
}

export default Quizarea;