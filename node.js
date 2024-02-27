const hitungluaspersegipanjang = require("./luas");
const hitungkelilingpersegipanjang = require("./keliling");

function hitungLuasDanKelilingPersegiPanjang(panjang, lebar) {
    const l = hitungluaspersegipanjang(panjang, lebar);
    const k = hitungkelilingpersegipanjang(panjang, lebar);
    console.log("Luas:", l , "Keliling:",k);
};

hitungLuasDanKelilingPersegiPanjang(10,5)