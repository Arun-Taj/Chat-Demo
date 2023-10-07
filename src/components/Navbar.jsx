import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar"> 
        <span className='logo'>ChatBot</span>
        <div className='user'> 
            <img src="https://scontent.fbir5-1.fna.fbcdn.net/v/t39.30808-1/350931020_224989523630477_2990004867012741390_n.jpg?stp=c253.67.1035.1035a_dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=fe8171&_nc_ohc=d_abtlGTfWsAX9JnvdM&_nc_ht=scontent.fbir5-1.fna&oh=00_AfCRIiu3Z8nqXv5RgrWSBbaktveRFHOFrKb8Rq9Byk2Rsg&oe=6516F090" alt="" />
            <span>Arun</span>
            <button>Log Out</button>
        </div>
     </div>
  );
}

export default Navbar;
