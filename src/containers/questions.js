import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Input} from 'react-materialize';
import {Button, Table} from 'react-materialize';
import Result from '../containers/results'

class Questions extends Component{
    constructor (props) {
        super(props)
        this.state = {count: 0, result:0, tabledata: {question:[], myAnswer:[], correctAnswer:[], status: []}}
      }
      componentWillUnmount () {
        clearInterval(this.timer)
      }
      componentDidMount(){
          clearInterval(this.timer)
          this.timer = setInterval(this.tick.bind(this), 1000)
      }
      tick () {
        if(this.state.count<60){
          this.setState({count: (this.state.count + 1)})
        }
        else{
            clearInterval(this.timer)
            this.checkResult(document.querySelectorAll('input[type=radio]:checked'))
        }
      }

      showResult(){
        return this.state.tabledata.question.map((content, index) => {
            return(
                <tr key={index}>
                    <td> {content} </td>
                    <td className={this.state.tabledata.status[index]} > {this.state.tabledata.myAnswer[index]} </td>
                    <td> {this.state.tabledata.correctAnswer[index]} </td>
                </tr>
            )
        })
        
      }

    checkResult(answers){
        
        clearInterval(this.timer)
        let c = 0;
            for (; c < answers.length; c++) {
                this.props.category.questions.map((category)=>{
                    if(answers[c].name == category.q){
                        if(answers[c].value == category.ca){
                            this.setState({result: (++this.state.result)})
                            this.state.tabledata.status.push('light-green-text accent-3-text')
                        }
                        else{
                            this.state.tabledata.status.push('red-text accent-3-text')
                        }
                        this.state.tabledata.question.push(category.q)
                        this.state.tabledata.myAnswer.push(answers[c].value)
                        this.state.tabledata.correctAnswer.push(category.ca)
                    }
                })
                
            }
        document.querySelectorAll('#questionForQuiz')[0].classList.add("hide")
        document.querySelectorAll('#resultGoto')[0].classList.remove("hide")

            
    }

    renderQuestions(){
        return this.props.category.questions.map((category) => {
            return (
                <div
                key={category.type}
                className="">
                    {category.q}
                    <Row>
                        <Input name={category.q} id={category.a[0]} type='radio' value={category.a[0]} label={category.a[0]} />
                        <Input name={category.q} id={category.a[1]} type='radio' value={category.a[1]} label={category.a[1]} />
                        <Input name={category.q} id={category.a[2]} type='radio' value={category.a[2]} label={category.a[2]} />
                        <Input name={category.q} id={category.a[3]} type='radio' value={category.a[3]} label={category.a[3]} />
                    </Row>
                </div>
            );
        });
    }

    render(){
        if(!this.props.category){
            return <div></div>
        }
       else{
           return (
            <div className="container">
                <div id='questionForQuiz' className="">
                <h3>Questions</h3>
                <h3>00:{this.state.count}</h3>
                    <div>
                        {this.renderQuestions()}
                    </div>
                    <Button waves='light' onClick={() => 
                            {
                                document.querySelector('#questionForQuiz').classList.add("hide");
                                this.checkResult(document.querySelectorAll('input[type=radio]:checked'))
                            }
                        } >Submit</Button>
            
                </div>
                <div id="resultGoto" className="hide">
                    <Result result = {this.state.result} />

                    <h3>Questions You Have Attempted: </h3>
                    <Table>
                    <thead>
                        <tr>
                        <th data-field="Question">Question</th>
                        <th data-field="Your Answer">Your Answer</th>
                        <th data-field="Correct Answer">Correct Answer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.showResult()}
                    </tbody>
                    </Table>
                </div>
            </div> 
        );
       }
    }
}

function mapStateToProps(state){
    return{
        category: state.selectedCategory
    };
}



export default connect (mapStateToProps)(Questions);