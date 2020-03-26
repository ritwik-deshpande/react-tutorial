import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class Home extends React.Component {
    // state = {
    //     posts: []
    //   }
    //   componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    //       .then(res => {
    //         console.log(res);
    //         this.setState({
    //           posts: res.data.slice(0,10)
    //         });
    //       })
    //   }

    render(){

        const  total_posts  = this.props.posts
        console.log(this.props.posts);
        const postList = total_posts.length ? (
            total_posts.map( (post) => {
              return (
                <div className="post card" key={post.id}>
                  <div className="card-content">
                  <Link to ={'/posts/'+ post.id}>
                    <span className="card-title">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="center">No posts to show</div>
          );
      
          return (
            <div>
              <div className="container">
                <h4 className="center">Home</h4>
                {postList}
              </div>
            </div>
          )
    }

    
  }
  const mapStatetoProps = (state)=>{
        return {
            posts: state.posts
        }

    }
  export default connect(mapStatetoProps)(Home)