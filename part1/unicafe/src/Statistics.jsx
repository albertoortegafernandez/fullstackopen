import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = (100 * good) / total
  
    if (total === 0) {
      return (
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
      )
    }
  
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine label="good" value={good} />
            <StatisticLine label="neutral" value={neutral} />
            <StatisticLine label="bad" value={bad} />
            <StatisticLine label="all" value={total} />
            <StatisticLine label="average" value={average} />
            <StatisticLine label="positive" value={positive + ' %'} />
          </tbody>
        </table>
      </div>
    )
  }

export default Statistics