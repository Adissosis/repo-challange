//kali ini fifonya dari kann ke kiri
const pembeli= ["Andi", "Budi"]
console.log("Antrean saat ini adalah:",pembeli)

//push berguna untuk menambahkan item di paling kanan
pembeli.push("Sarah", "Mutia","Romi")
console.log("Antrean pembeli saat ini adalah:", pembeli)

console.log("Data yang diproses adalah", pembeli[0])
//shift berguna untuk menghilngkan item di paling kiri (index 0)
const dataDihilangkan = pembeli.shift()
console.log("Data yang dihilangkan adalah:", dataDihilangkan)
console.log("Antrean pembeli saat ini adalah", pembeli)

