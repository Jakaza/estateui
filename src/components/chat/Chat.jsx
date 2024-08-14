import React, { useState } from 'react'
import "./chat.scss";

function Chat() {

    const [chat, setChat] = useState(true)



  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>

        <div className="message">
            <img src="https://media.licdn.com/dms/image/C5603AQGBuD8-7O6omw/profile-displayphoto-shrink_200_200/0/1646339755942?e=2147483647&v=beta&t=PCferG5ppTHsHahcg8inItLcasy89bklcJY5WLgVBZ4" alt="" />
            <span>Themba</span>
            <p>Lorem, ipsum dolor sit amet consectetur....</p>
        </div>
        <div className="message">
            <img src="https://media.licdn.com/dms/image/C5603AQGBuD8-7O6omw/profile-displayphoto-shrink_200_200/0/1646339755942?e=2147483647&v=beta&t=PCferG5ppTHsHahcg8inItLcasy89bklcJY5WLgVBZ4" alt="" />
            <span>Themba</span>
            <p>Lorem, ipsum dolor sit amet consectetur....</p>
        </div>
        <div className="message">
            <img src="https://media.licdn.com/dms/image/C5603AQGBuD8-7O6omw/profile-displayphoto-shrink_200_200/0/1646339755942?e=2147483647&v=beta&t=PCferG5ppTHsHahcg8inItLcasy89bklcJY5WLgVBZ4" alt="" />
            <span>Themba</span>
            <p>Lorem, ipsum dolor sit amet consectetur....</p>
        </div>
        <div className="message">
            <img src="https://media.licdn.com/dms/image/C5603AQGBuD8-7O6omw/profile-displayphoto-shrink_200_200/0/1646339755942?e=2147483647&v=beta&t=PCferG5ppTHsHahcg8inItLcasy89bklcJY5WLgVBZ4" alt="" />
            <span>Themba</span>
            <p>Lorem, ipsum dolor sit amet consectetur....</p>
        </div>
        <div className="message">
            <img src="https://media.licdn.com/dms/image/C5603AQGBuD8-7O6omw/profile-displayphoto-shrink_200_200/0/1646339755942?e=2147483647&v=beta&t=PCferG5ppTHsHahcg8inItLcasy89bklcJY5WLgVBZ4" alt="" />
            <span>Themba</span>
            <p>Lorem, ipsum dolor sit amet consectetur....</p>
        </div>
      </div>
     { chat &&  <div className="chatBox">
        <div className="top">
            <div className="user">
                <img src="https://media.licdn.com/dms/image/C5603AQGBuD8-7O6omw/profile-displayphoto-shrink_200_200/0/1646339755942?e=2147483647&v=beta&t=PCferG5ppTHsHahcg8inItLcasy89bklcJY5WLgVBZ4" alt="" />
                Themba

                
            </div>

            <span className="close" onClick={()=> setChat(null)}>
                    X
                </span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
        </div>
      </div>}
    </div>
  )
}

export default Chat
