import React, {Component} from 'react';

class Timer extends Component {
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    componentDidMount(){
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
    }
    tick () {
      if(this.state.count<10){
        this.setState({count: (this.state.count + 1)})
      }
      else{
          console.log(document.querySelectorAll('input[type=radio]:checked'))
          clearInterval(this.timer)
      }
    }
    render () {
      return (
        <div className='timer'>
          <h3>00:{this.state.count}</h3>
        </div>
      )
    }
  }

export default Timer;