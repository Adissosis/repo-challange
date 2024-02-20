//fifo (first in first out) (kiri masuk kanan keluar)
const antrean = ["Andi", "Budi", "Satria", "Gekko", "Nathan"]
console.log("Antrean pembeli saat ini:", antrean)

const datBaru = "Sarah"
console.log("data yang ditambahkan:", datBaru)

//unshift berguna untuk menambahkan item di sebelah kiri (index 0)
antrean.unshift(datBaru)
console.log("Antrean baru saat ini:", antrean)

console.log("Panjang proses", antrean.length)
console.log("Pembeli di proses:", antrean[antrean.length - 1])

//pop bergun untuk menghapus item di sebelah kanan (index terakhir)
const dataDihilangkan = antrean.pop()
console.log("Data yang dihilangkn:", dataDihilangkan)
console.log("Antren saat ini:", antrean)