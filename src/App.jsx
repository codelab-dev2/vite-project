import React, { Fragment } from 'react'
import './App.css'
// import "./components/Netflix.css"
import styles from './components/Netflix.module.css'
import NetflixSeries from './components/NetflixSeries' //default
// import ViteSeries from './components/NetflixSeries'   //default
// import { Footer, Header} from './components/NetflixSeries' //named
// import NetflixSeries,{ Footer, Header} from './components/NetflixSeries' //combined
import {EventHandling} from './components/EventEandling'
import { EventProps } from './components/EventProps'
import { EventPropagation } from './components/EventPropagatio'
import { State } from './components/hooks/States'
import { DerivedState } from './components/DericedState'
import { LiftingState } from './components/LiftStateUp'
import { ToggleSwitch } from './Project/ToggleSwitch/ToggleSwitch'
import { Todo } from './Project/Todo/Todo'



// export const App = () => {
//   return <h1>hello,my name is nevil</h1>
// };
// console.log(React.createElement("h1",null,"hello,my name is nevil"))

export const App = () => {
  // return [ <NetflixSeries key="1"/>, <NetflixSeries key="2"/> ]

  return (
      // <div>
      <section className='container'>
       {/*<h1 className={styles['card-heading']}>List Of Best Netflix Series</h1>*/}

        {/*<EventHandling/>*/}
        {/*<EventProps/>*/}
        {/*<EventPropagation/>*/}
        {/*<State/>*/}
        {/*<sibling/>*/}
        {/*<DerivedState/>*/}
        {/*<LiftingState/>*/}
        {/*<ToggleSwitch/>*/}
        <Todo/>

        {/*<div>*/}
        {/*  <div>*/}
        {/*    <img src="download (3).jpeg"/>*/}
        {/*  </div>*/}
        {/*  <h2>Name : nevil</h2>*/}
        {/*  <h3>Rating : 8.2</h3>*/}
        {/*  <p>Summery : hello,Surat...........!</p>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <div>*/}
        {/*    <img src="download (3).jpeg"/>*/}
        {/*  </div>*/}
        {/*  <h2>Name : nevil</h2>*/}
        {/*  <h3>Rating : 8.2</h3>*/}
        {/*  <p>Summery : hello,Surat...........!</p>*/}
        {/*</div>*/}

        {/*<ViteSeries/> //default*/}
        {/*<Header/>*/}
        {/*<NetflixSeries/>*/}

        {/*<NetflixSeries/>*/}

        {/*<NetflixSeries/>*/}
        {/*<Footer/>*/}

      </section>
      // </div>
  )
}

// export function Sibling() {
//   console.log('sibling component rendered')
//   return (
//       <div className="main-div">
//         <h2>sibling component </h2>
//       </div>
//   )
// }
export default App



