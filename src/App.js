import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Ninja from './Ninja';
import AddNinja from './AddNinja'
import Home from  './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { Route, BrowserRouter } from 'react-router-dom'

class App extends Component{

  state = {
    students : [{name: "Ritwik",
    age: 22,
    height : "5\'10"},{name: "Chaitya",
    age: 22,
    height : "5\'10"},{name: "Ayush",
    age: 22,
    height : "5\'10"}]
    
  }
  addNinja = (n) =>{
    let ninja = [...this.state.students,n]
    this.setState({
      students: ninja
    })
  }
  deleteNinja = (id) => {

    let ninjas = this.state.students.filter( student =>{ return id !== student.name  } )

    this.setState({
      students:ninjas
    })

  }

  render(){
    return (
      <BrowserRouter>
          
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/posts/:post_id' component={Post} />
        
      
        
          <h1 className="center blue-text">
            Paperless Office
          </h1>
          <Ninja ninja = {this.state.students} func = {this.deleteNinja}/>

          <AddNinja func ={this.addNinja}/>

         
         
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
