// get user's data
// get user's coordinates
function getCoords(){
  return new Promise ((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
} 
console.log(getCoords());

// get user's time
function userTime() {
    const now = new Date()
    console.log(now)
    return(now.getHours())
}
userTime()
console.log('Now let us take a look at our new work!')
console.log(userTime())


// helper functions
// check time of day
// Get the user's time:                                                              

function getMealTime(){
    const tod = userTime()
    
    return tod > 20 ? 'late-night-snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
    
    // A ternary is another way to write an if-else statement
    // Another way to write the above lines would to refactor it as:
    // return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast' // <--- this is an example of a ternary
}
    
  console.log(getMealTime())                   




// build ads
// build ad 1
function buildAd(){

  const mealTime = getMealTime()
  let content = document.querySelector('.ad1')
  let inner = document.createElement('p')
  inner.innerHTML = We've got the best <span>${mealTime}</span> in town
  content.append(inner)
}
buildAd1()
// build ad 2


// event listeners
// on load, build ads
