import db from 'services'

// TODO: handle adding exisiting contestant (update)
const getContestant = async (id) => {
  try {
    const snapshot = await db
      .collection('contestants')
      .orderBy('points', 'desc')
      .get()
    let rank = 0
    const foundDoc = snapshot.docs.find((doc) => {
      rank++
      return doc.id === id
    })
    if (foundDoc) return { ...foundDoc.data(), rank }
    alert('Contestant with that ID does not exist')
    return undefined
  } catch (ex) {
    alert('Something bad happened')
    console.log(ex)
  }
}

export default getContestant
