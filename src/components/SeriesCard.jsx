import React from 'react'
import styles from './Netflix.module.css'
import styled from 'styled-components'

export const SeriesCard = (props) => {
  // const {curElem} = props; //destructuring
  const { preview, name, rate, description, tags, actor, watch_url } = props.curElem //destructuring

  // const btnStyle = {
  //   padding: '10px 20px',
  //   border: 'none',
  //   fontSize: '15px',
  //   backgroundColor: `${rate >= 8.5 ? '#7dcea0' : '#f7dc6f'}`,
  //   color: 'var(--btn-color)',
  //   borderRadius: '5px',
  //   fontWeight: 'bold',
  //   cursor: 'pointer'
  // }

//styled components using style object
//   const ButtonWatch = styled.button({
//     padding: '10px 20px',
//     border: 'none',
//     fontSize: '15px',
//     backgroundColor: `${rate >= 8.5 ? '#7dcea0' : '#f7dc6f'}`,
//     color: 'var(--btn-color)',
//     borderRadius: '5px',
//     fontWeight: 'bold',
//     cursor: 'pointer'
//   })

//styled components using template literals
  const ButtonWatchNow = styled.button`
    padding: 10px 20px;
    border: none;
    font-size: 15px;
    background-color: ${(props) => props.rate >= 8.5 ? '#7dcea0' : '#f7dc6f'};
    color: var(--btn-color);
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  `
const Rating = styled.h5`
font-size: 1.6rem;
  color: #7dcea0;
  text-transform: capitalize;
`

  const ratingClass = rate >= 8.5 ? styles.superHit : styles.average

  return (
      <li className={styles.card}>
        <div>
          <img src={preview} alt={name} width="40%" height="40%"/>
        </div>
        {/*<div className={styles['card-content']}>*/}
        <div className="flex flex-col gap-3 py-[15px] px-[20px]">
          <h2>Name : {name} </h2>
          <Rating>Rating : <span className={`${styles.rating} ${ratingClass}`}>{rate} </span></Rating>
          <p className="text-3xl font-bold underline text-cyan-300">Summery : {description}</p>
          <p>Genre:{tags}</p>
          <p>Cast : {actor}</p>
          <a href={watch_url} target="_blank">
            {/*<button style={btnStyle}>Watch Now</button>*/}
            {/*<ButtonWatch rate={rate}>Watch Now</ButtonWatch>*/}
            <ButtonWatchNow rate={rate}>Watch Now</ButtonWatchNow>

          </a>
        </div>
      </li>
  )
}
