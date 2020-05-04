import React, { useContext } from 'react'
import Highlighter from 'react-highlight-words'

import { useMatchingContestants } from 'hooks'
import 'styles.css'

import { InputContext } from '../'

const Match = () => {
  const { name, setName } = useContext(InputContext)
  const { contestants, isFetching } = useMatchingContestants(name)

  if (contestants.length === 0 && isFetching)
    return <p>Searching For Matching Contestants...</p>

  return contestants.map((contestant) => (
    <p
      key={contestant.name}
      className="match-contestant"
      onClick={() => setName(contestant.name)}
    >
      <Highlighter
        highlightClassName="yellow"
        searchWords={[name]}
        textToHighlight={contestant.name}
      />{' '}
      - {contestant.points}
    </p>
  ))
}

export default Match
