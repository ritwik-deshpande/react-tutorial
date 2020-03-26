import React,{Component} from "react";


class AddNinja extends Component{

    state = {
        name: null,
        age : null,
        height : null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.func(this.state);
    }

    render(){
        return (
            <div className="AddNinja">
                <form onSubmit={this.handleSubmit}>
                <input type="text" id= "name" onChange = {this.handleChange}></input> <br></br>
                <input type="text" id= "age" onChange = {this.handleChange}></input><br></br>
                <input type="text" id= "height" onChange = {this.handleChange}></input><br></br>
                <button>SUBMIT</button> 
                   
                </form>
            </div>
        )
    }
}

export default AddNinja ;