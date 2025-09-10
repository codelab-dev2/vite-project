import "./EV.css";
export const EventHandling = () => {

  // function handleButtonClick(){
  //   alert("hey my name is nevil")
  // }

  const handleButtonClick = (event) => {
    alert("hey my name is nevil")
    console.log('🚀🚀🚀 handleButtonClick => event :: ', event)
    console.log('🚀🚀🚀 handleButtonClick => event :: ', event.target);
    console.log('🚀🚀🚀 handleButtonClick => event :: ', event.type)
  };
  function handleWelcomeUser(user){
    console.log(`hey ${user} ,welcome`)
  }
  return(
      <>
        {/*named func*/}
        <button onClick={handleButtonClick}>click me!</button>
        <br/>
        {/*Fat arrow func*/}
        <button onClick={ (event) => handleButtonClick(event)}>click me! 2</button>
        <br/>
        {/*Inline event handlers*/}
        <button onClick={ (event) => console.log(event)}>inline func</button>
        <br/>
        {/*Inline arrow func*/}
        <button onClick={ () => alert("Inline arr func")}>Inline arr func</button>
        <br/>
        {/*passing argument to event handlers*/}
        {/*<button onClick={handleWelcomeUser("nevil")}>click me!</button>*/}
        <button onClick={ () => handleWelcomeUser("nevil")}>click me!</button>

      </>
  );
};