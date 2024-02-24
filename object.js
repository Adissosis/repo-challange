//bedanya dengan array dan cara memanggil
// const mobil2 = ["Pagani"];
// console.log(mobil2[0])

const mobil = {
    merk : "Pagani",
    model : ["Hellcat", "Huayra"],
    pemilik : "Adis",
    komponen : {
        mesin : "V12",
        send : "Nyala",
        wiper : "Nyala"
    }
};
console.log(mobil.komponen.mesin)