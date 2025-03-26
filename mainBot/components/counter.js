
const requestsList = {}

const handleCounter = (data) => {
  let keyRequest 

  console.log('3434', data)
  if (typeof(data) === 'string') {
    keyRequest = data
  } else if (typeof(data) === 'object' && data !== null) {
    keyRequest = data.keyRequest
  }

  if (keyRequest) {
    if (requestsList[keyRequest]) {
      requestsList[keyRequest] +=1
    } else {
      requestsList[keyRequest] = 1
    }
  }


return requestsList

}





module.exports = handleCounter