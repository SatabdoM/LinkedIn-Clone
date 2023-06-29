import React ,{forwardRef} from 'react'
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOptions from './InputOptions';
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import LoopIcon from "@mui/icons-material/Loop";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";


const Post = ({name ,description,message,photoUrl}) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Satabdo Majumder</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        {message}
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOptions
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="gray"
        />
        <InputOptions Icon={ShareIcon} title="Repost" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;

// const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
//   return (
//     <div ref={ref} className="post">
//       <div className="post__header">
//         <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>

//         <div className="post__info">
//           <h2>{name}</h2>
//           <p>{description}</p>
//         </div>
//       </div>

//       <div className="post__body">
//         <p>{message}</p>
//       </div>

//       <div className="post__buttons">
//         <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
//         <InputOptions Icon={ChatBubbleOutlineIcon} title="Comment" color="gray" />
//         <InputOptions Icon={ShareIcon} title="Share" color="gray" />
//         <InputOptions Icon={SendIcon} title="Send" color="gray" />
//       </div>
//     </div>
//   );
// });

// export default Post;