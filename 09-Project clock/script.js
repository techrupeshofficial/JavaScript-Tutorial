
const myCurrentDate = new Date()
console.log(myCurrentDate)

const time = document.querySelector('#displayTime')
time.innerHTML = `${myCurrentDate}`
