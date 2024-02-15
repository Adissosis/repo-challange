//rumusnya
function TentukanLuasDanKelilingPersegi (sisi){
    const luas = sisi ** 2;
    const keliling = sisi * 4;
    console.log("Luas", luas, "Keliling", keliling)
}

//datanya
const kumpulanangka = [5, 4, 5, 4, 8]

//prosesnya masukin rumus "TentukanluasdanPersegi"
for (let urutan = 0; urutan <= 4; urutan = urutan + 1){
    console.log("Data sisi", kumpulanangka[urutan])
    TentukanLuasDanKelilingPersegi(kumpulanangka[urutan])
}

console.log("looping selesai !")