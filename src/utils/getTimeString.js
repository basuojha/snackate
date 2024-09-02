const getTimeString = ({ timeInMinutes }) => {
  if (timeInMinutes < 60) {
    return `${timeInMinutes} minutes`
  } else {
    const hoursAndMin = (timeInMinutes / 60).toFixed(2).split('.')
    const hours = hoursAndMin[0]
    const minutes = hoursAndMin[1]
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} and ${minutes} ${
      minutes === 1 ? 'minute' : 'minutes'
    } `
  }
}

export default getTimeString
