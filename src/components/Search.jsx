import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input type="text" placeholder='Find User'/>
      </div>
      <div className='userChat'>
        <img src="https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_960_720.jpg" alt="" />
        <div className="userChatInfo">
          <span>Soni</span>
        </div>
      </div>
    </div>
  )
}

export default Search
