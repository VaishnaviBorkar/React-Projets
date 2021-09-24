import React, { Component } from 'react';
import '../fullpost/fullPost.css';
class FullPost extends Component {
  
    render () {
        let post=  <h1>Plese Select the state</h1>
        if(this.props.id){
            post=(
                <div className="FullPost">
                  
                    <h1>Title</h1>
                    <p>Information</p>
                    <div className="Edit">
                        {/* <button onClick={this.state} className="Delete">Delete</button> */}
                    </div>
                </div>
            );

        }
        return post;
            }
    
}
export default FullPost;
