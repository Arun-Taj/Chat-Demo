import React from 'react';

const Chats = () => {
  return (
    <div className='chats'> 
    <div className='userChat'>
        <img src="https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_960_720.jpg" alt="" />
        <div className="userChatInfo">
          <span>Arun</span> 
          <p>Hello</p>
        </div>
        </div>
        <div className='userChat'>
        <img src="https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_960_720.jpg" alt="" />
        <div className="userChatInfo">
          <span>Ram</span> 
          <p>Hello</p>
        </div>
        </div>
        <div className='userChat'>
        <img src="https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_960_720.jpg" alt="" />
        <div className="userChatInfo">
          <span>Hari</span> 
          <p>Hello</p>
        </div>
        </div>
    </div>
  );
}

export default Chats;
