import db from 'services'

const deleteContestant = async (id) => {
  try {
    await db.collection('contestants').doc(id).delete()
  } catch (ex) {
    alert('Something bad happened')
    console.log(ex)
  }
}

export default deleteContestant
