

const additionblock = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  //test
  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello additionblock`}))
  res.end()
  
}

export default additionblock
