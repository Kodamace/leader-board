import { capitalize } from 'helpers'
import db from 'services'

const addContestant = async (rawName, rawPoints) => {
  const name = capitalize(rawName)
  const points = Number(rawPoints)
  try {
    await db.collection('contestants').add({ name, points })
  } catch (ex) {
    alert('Something bad happened')
    console.log(ex)
  }
}

export default addContestant
