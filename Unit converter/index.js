

const inputEl = document.getElementById("input-el")

const lengthCon = document.getElementById("length-con")
const volumeCon = document.getElementById("volume-con")
const massCon = document.getElementById("mass-con")

let metersToFeet = converter("meters", "feet", 3.2808399)
let litersToGallons = converter("liters", "gallons", 0.264172052)
let kgToPounds = converter("kilos", "pounds", 2.20462262)

inputEl.addEventListener ("input", function() {

    lengthCon.innerHTML = metersToFeet.print(inputEl.value)
    volumeCon.innerHTML = litersToGallons.print(inputEl.value)
    massCon.innerHTML = kgToPounds.print(inputEl.value)
    
})

function converter(unit1, unit2, factor) {
    return {
        convert1To2(value) {
            return value * factor
        },
        convert2To1(value) {
            return value / factor
        },
        print(value) {
            let conv1 = this.convert1To2(value).toFixed(3)
            let conv2 = this.convert2To1(value).toFixed(3)
           return `${value} ${unit1} = ${conv1} ${unit2} | ${value} ${unit2} = ${conv2} ${unit1}`
        }
    }

}