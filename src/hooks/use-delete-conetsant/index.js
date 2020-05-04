import db from 'services'

import { errHandler } from 'helpers'

const useDeleteContestant = async (id) => {
  try {
    await db.collection('contestants').doc(id).delete()
  } catch (err) {
    errHandler(err)
  }
}

export default useDeleteContestant
