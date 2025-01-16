function UserCard({user}){
    return(
      
        <ul>
          
            <li>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </li>
          
        </ul>
      
    )
  }
  
export default UserCard
