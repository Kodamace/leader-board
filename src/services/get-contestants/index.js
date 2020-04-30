import db from 'services'

const getContestants = async () => {
  try {
    const snapshot = await db
      .collection('contestants')
      .orderBy('points', 'desc')
      .get()
    return snapshot.docs.map((doc, index) => ({
      ...doc.data(),
      id: doc.id,
      rank: index + 1,
    }))
  } catch (ex) {
    alert('Something bad happened')
    console.log(ex)
  }
}

export default getContestants
