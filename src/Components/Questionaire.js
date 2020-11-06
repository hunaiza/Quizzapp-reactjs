import React, { Component } from 'react';
import DataSet from '../Api/DataSet';
import QuizzApp from './QuizzApp';
import ScoreArea from './ScoreArea';

class Questionaire extends Component {
    
    constructor() {
        super ();
        this.state = {
            current: 0,
            DataSet: DataSet, 
            correct: 0,
            incorrect: 0,
            isFinished: false
        }
    }
    render(){
        return(
            <div>
                <QuizzApp isFinished={this.state.isFinished} dataSet={this.state.DataSet[this.state.current]}/>
                <ScoreArea />
            </div>
        );
    }
} 

export default Questionaire;
