import React, { useEffect, useState } from 'react'

import { getContestants } from 'services'

import Contestant from './contestant'

const DisplayData = () => {
  // const contestants = useSelector(state => state.contestants);
  const [isFetching, setIsFetching] = useState(true)
  const [contestants, setContestants] = useState([])

  const fetchContestants = async () => {
    const results = await getContestants()
    setContestants(results)
    setIsFetching(false)
  }

  useEffect(() => {
    fetchContestants()

    // getContestants()
    //   .then((results) => {
    //     setContestants(results)
    //     setIsFetching(false)
    //   })
    //   .catch((err) => {
    //     alert('Something bad happened')
    //     console.log(err)
    //     setIsFetching(false)
    //   })
  }, [])

  if (isFetching) return <h4>Fetching Contestants...</h4>

  return (
    <div>
      {/* we then pass contestant below  */}
      {contestants.length > 0 ? (
        contestants.map((contestant, index) => (
          <Contestant key={contestant.name} index={index} {...contestant} />
        ))
      ) : (
        <h4>No Contestants Yet</h4>
      )}
    </div>
  )
}

export default DisplayData
