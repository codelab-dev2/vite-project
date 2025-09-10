import React from 'react'
import seriesData from '../api/seriesData.json'
import {SeriesCard} from './SeriesCard';

const NetflixSeries = () => {
  return (
      <ul className="grid grid-three-cols">
        {seriesData.map((curElem) => (<SeriesCard key ={curElem.id} curElem ={curElem} />))}
      </ul>
  )
}
export default NetflixSeries

/*
const NetflixSeries = () => {
  const name = 'nevil' // variables dynamic value
  const rating = '8.2' // expressions  dynamic value

  //function calls
  const returnGenre = () => {
    const Genre = 'RomCom'
    return Genre
  }
// 1. conditional jsx
  let age = 16

  /*
  if(age < 18 ){
    return (
        <div>
          <div>
            <img src="download (3).jpeg"/>
          </div>
          <h2>Name : {name} </h2>
          <h3>Rating : {10 + 8.5} </h3>
          <p>Summery : hello,Surat...........!</p>
          <p>Genre:{returnGenre()}</p>
          <button>no</button>
        </div>
    )
  }
  return (
      <div>
        <div>
          <img src="download (3).jpeg"/>
        </div>
        <h2>Name : {name} </h2>
        <h3>Rating : {10 + 8.5} </h3>
        <p>Summery : hello,Surat...........!</p>
        <p>Genre:{returnGenre()}</p>
        <button>yes</button>
      </div>
  )
}
  */
// 2. conditional jsx
//  ternary operators

// 3. conditional jsx
//   let a = 'no'
//   if (age >= 18) a = 'yes'
//
// //4. conditional jsx
//   const b = () => {
//     if (age >= 18) return 'yes'
//     return 'no'
//   }
//
//   return (
//       <div>
//         <div>
//           <img src="download (3).jpeg"/>
//         </div>
//         <h2>Name : {name} </h2>
//         <h3>Rating : {10 + 8.5} </h3>
//         <p>Summery : hello,Surat...........!</p>
//         <p>Genre:{returnGenre()}</p>
//         {/*<button>{age >= 18 ? "yes" : "no"}</button>*/}
//         {/*<button>{a}</button>*/}
//         <button>{b()}</button>
//       </div>
//   )
// }
// export default NetflixSeries;

// export const Header = () => {
//   return <p>Good morning...</p>
// }
// export const Footer = () => {
//   return <p>hello Surat</p>
// }



