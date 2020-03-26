import React, {Component} from 'react'

class Ninja extends Component{

    
    

    render(){

        const {ninja} = this.props;
        const ninjaList = ninja.map(ninja => {

            return (
                <div>
                <p>Name :{ninja.name}</p>
                <p>Age : {ninja.age} </p>
                <p>Height : {ninja.height} </p>
                <button onClick={() => this.props.func(ninja.name)}> X </button>
                </div>
            )
            
        })
        return (
            <div className="ninja-header">
                { ninjaList}
            </div>
        )
       
    }
}

export default Ninja;