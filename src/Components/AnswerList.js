import React from 'react'
import Answers from './Answer';

function AnswerList(props) {
    const options = [];
    for(let i=0; i < props.DataSet.options.length; i++){
        options.push(<Answers choice={i} answer={props.DataSet.options[i]}/>)
    }
    return(
        <div>
            {options}
        </div>
    )
}

export default AnswerList;