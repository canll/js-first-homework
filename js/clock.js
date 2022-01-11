

let userName = prompt("lütfen isminizi yazın")
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")
let clock = new Date()
// myName.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`

// myClock.innerHTML = clock;
if (userName.length > 0){
   myName.innerHTML =  userName
   myClock.innerHTML =  clock

}else {
    myName.innerHTML = "lütfen adınızı giriniz"
}