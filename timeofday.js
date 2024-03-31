

function getTimeOfDay(time) {
    if(time >= 4 && time < 12) return "Morning"
    else if(time >= 12 && time < 17) return "Afternoon"
    else return "Evening"
}

function isMorning(time) {
    if(time >= 4 && time < 12) return true
    else return false
}

function isAfternoon(time) {
    if(time >= 12 && time < 17) return true
    else return false
}

function isEvening(time) {
    if(time >= 17 || time < 4) return true
    else return false
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening}