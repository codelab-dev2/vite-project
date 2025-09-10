function Profile(){
  return(
      <div>
        <h1>Profile card challenge</h1>
        <ProfileCard
         name="nevil"
         age={21}
         greeting={
           <div>
             <strong>Hi nevil, have a wonderful day!</strong>
           </div>
         }
        >
          <p>Hobbies:Reading,Hiking</p>
          <button>Contact</button>
        </ProfileCard>

        <ProfileCard
            name="jay"
            age={23}
            greeting={
              <div>
                <strong>Hi jay, keep up the great work!</strong>
              </div>
            }
        >
          <p>Hobbies:Reading,Gaming</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
  )
}
export default Profile;

function ProfileCard({name, age,greeting,children}){
  // const {name, age,greeting,children} =  props;
  return(
      <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
      </>
  );
}