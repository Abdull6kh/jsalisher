var money = +prompt("Alisher qancha puling bor ?")
var answ = document.querySelector(".status")
var plain = 500 * 11000
var hotel = 250 * 11000
var cost = 120 * 11800
var total = plain + hotel + cost

if (money >= total) {
    answ.textContent = "oq yo'l";
}else {
    answ.textContent = ", ozgina sabr qilish kerak bo'lar ekan."
}