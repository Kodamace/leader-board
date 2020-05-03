const errHandler = (err) => {
  if (err) {
    alert('Something bad happened!')
    console.error(err)
    return true
  }
  return false
}

export default errHandler
