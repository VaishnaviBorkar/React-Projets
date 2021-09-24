import { Component } from "react";
import Post from '../../components/post/Posts';
import './Blog.css';
import FullPost from '../../components/fullpost/FullPost'
import axios from "axios";
class Blog extends Component{
    //initialize an emppty array state
    state={
        posts:[],
        selectedId:null
    }
    componentDidMount(){
        //used componentditmount to make request bcz it is a
        // only lifecyclemethode where  only you can make side effect
        //how to make request --use axios and axios uses promise
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
        const posts=response.data.slice(0,4)
        const updatedpost=posts.map(post=>{
            return {
                ...post,
            author:"Vaishnavi"
        }
        })

            this.setState({posts:updatedpost})
            //initialize post array with data
            // console.log(this.state.posts);
            console.log(response);
        })
        .catch(err=>{
            console.log(err+"Something went Wrong");
        })
    }
    getselectedid=(id)=>{
        this.setState({selectedId:id})
        // console.log(id);

    }
    render(){
        //render posts depending upon the size of response text
        const posts=this.state.posts.map(post=>{
            return  <Post
             key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={()=>this.getselectedid(post.id)}
           
            />
           
        })
        return(
          
            <div>
                <section className="posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                  
                </section>
            </div>
        );
    }
}
export default Blog;