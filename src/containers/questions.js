import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Input} from 'react-materialize';
import {Button} from 'react-materialize';
import Result from '../containers/results'

class Questions extends Component{
    constructor (props) {
        super(props)
        this.state = {count: 0, result:0}
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

    checkResult(answers){
        clearInterval(this.timer)
        let c = 0;
            for (; c < answers.length; c++) {
                this.props.category.questions.map((category)=>{
                    if(answers[c].name == category.q && answers[c].value == category.ca){
                        this.setState({result: (++this.state.result)})
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