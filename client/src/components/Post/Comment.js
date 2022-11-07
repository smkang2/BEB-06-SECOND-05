import { React , useState, useContext} from 'react';
import "./post.css";
import {UseContext} from '../../User/UserContextProvider';
// import dummyComment from './dummyComment';

const Comment = () => {

    const {user, setUsers, image, cookies} = useContext(UseContext);
    const [commentValue, setCommentValue] = useState('');
    const [commentBox, setCommentBox] = useState([]);

    const onChange = e => {
      setCommentValue(e.target.value);
    };
  

   const onSubmit = e => {
      e.preventDefault();
      if (commentValue === '') {
        return;
      }
      setCommentBox(() => {
          return (
          [...commentBox, { name: 'yoo', comment: commentValue }]
        )})
      ;
      setCommentValue('');
    };

    console.log(commentValue);
    console.log(commentBox);

  return (
<div className="post">    
      <div className="postWrapper">
            <div className="postTop">
       {/* {dummyComment
       .map(el => {
          return (
            <div className="postUsername" key={el.id}>
            <span className="postUsername">{el.name}</span>
            <span className="postDate">{el.comment}</span>
            </div>
          )})
          }; */}
      {commentBox.map(el => {
        return (
          <div className="postComment" key={el.id} >
            <div>
            <img className="postProfileImg" src={image} alt=""/>
            <span className="postUsername">{el.name}</span>
            <span className="postDate">{el.comment}</span>
            </div>
          </div>
        )})
         }
        </div>
    <div className={`postBottom ${cookies ? '':'btn-none'}`} onSubmit={onSubmit}>
     <form className="postBottomLeft">
      <img className="postProfileImg" src={image} alt=""/>
      <input
        type="text"
        placeholder="댓글 달기..."
        className="comment"
        value={commentValue}
        onChange={onChange}
      />
      <button className="postButton" >게시</button>
    </form>
    </div>
    </div>
    </div>

  );
};

export default Comment;