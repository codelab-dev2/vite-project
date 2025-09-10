export const EventProps = () => {
  const HandlerWelcomeUser = (user) => {
    alert(`hey ,${user}`)
  }

  const handleHover = () => {
    alert(`hey , Welcome`)
  }
  return (
      <>
        <WelcomeUser onClick={() => HandlerWelcomeUser('nevil')} onMouseEnter={handleHover}/>
      </>
  )
}

const WelcomeUser = (props) => {
  const {onClick,onMouseEnter} = props;
  const handleGreeting = () => {
    console.log(`hey, user welcome`)
    onClick()
  }
  return (
      <>
        <button onClick={onClick}>click</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
      </>
  )
}