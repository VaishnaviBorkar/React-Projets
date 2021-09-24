import './post.css'
const post=(props)=>(
    <article className="post" onClick={props.clicked}>
        <h1>{props.title}</h1>
    <div className="info">
    <div className="Author">{props.author}</div>
    </div>

    </article>
);
export default post;