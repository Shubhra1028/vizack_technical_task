import React, {Component} from 'react';

class Results extends Component{
    determineResult(){
        if(this.props.result <=1 ){
            return <h1>Poor</h1>
        }
        else if(this.props.result == 2 ){
            return <h1>Bad</h1>
        }
        else if(this.props.result == 3 ){
            return <h1>Good</h1>
        }
        else if(this.props.result == 4 ){
            return <h1>Strong</h1>
        }
        else if(this.props.result == 5 ){
            return <h1>Very Strong</h1>
        }
    }

    render(){
        return(
            <div className="">
                <p>
                    Results : {this.props.result}
                </p>
                {this.determineResult()}
            </div>
        );
    }
}

export default Results;