function log1(){
    console.log("Jalankan log 1")
};

function log2(){
    console.log("Jalankan log 2")
};

function runlog1(){
    return new Promise (
        function (resolve, reject){
            setTimeout(log1, 2002)
        }
    )
};

function runlog2(){
    return new Promise (
        function (resolve, reject){
            setTimeout(log2, 2000)
        }
    )
};

function runAll(){
    runlog1();
    runlog2();
};
runAll();