import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { getInitalData } from '../reducers/ReduxStore';

class Home extends React.Component {
    // // state = {
    // //     posts: []
    // //   }
    //   componentWillMount(){
    //     console.log('Calling init function')
    //     this.props.initialize()
        
        
    //   }
    // state = {
    //   posts: []
    // }
    componentDidMount(){
      // axios.get('https://jsonplaceholder.typicode.com/posts/')
      //   .then(res => {
      //     console.log(res);
      //     this.setState({
      //       posts: res.data.slice(0,10)
      //     });
      //   })
      // this.props.initialize()
      // this.props.initialize()
      this.props.getInitalData('ru')
    }
    render() {
      console.log(this.props)
      const renderTable = () => {
        return this.props.posts.metadata.data.map(user => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.company.name}</td>
            </tr>
          );
        });
      };
  
      return (
        <>
          {!this.props.posts.isDataInitialized && <div>Initializing data...</div>}
          {this.props.posts.isDataInitialized && (
            <div>
              <h1 id="title">API Table</h1>
              <table id="users">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </table>
            </div>
          )}
        </>
      );
    }

    // render(){
    
    //     const  total_posts  = this.props.metadata.data
       
    //     console.log('The posts are to display are')
    //     console.log(total_posts);
    //     const postList = total_posts.length ? (
    //         total_posts.map( (post) => {
    //           return (
    //             <div className="post card" key={post.id}>
    //               <div className="card-content">
    //               <Link to ={'/posts/'+ post.id}>
    //                 <span className="card-title">{post.title}</span>
    //                 </Link>
    //                 <p>{post.body}</p>
    //               </div>
    //             </div>
    //           )
    //         })
    //       ) : (
    //         <div className="center">No posts to show</div>
    //       );
      
    //       return (
    //         <div>
    //           <div className="container">
    //             <h4 className="center">Home</h4>
    //             {postList}
    //           </div>
    //         </div>
    //       )
    // }

    
  }
  const mapStatetoProps = (state)=>{

      return {
        posts:state
      }
  }
      

  //   }
  const mapDispatchtoProps = ()=>{
    console.log('mapping dispatch to props ')
    return{
      initialize: getInitalData
    }
  }
  export default connect(mapStatetoProps,
    {getInitalData})(Home)
  // export default Home