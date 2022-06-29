
// Q2
function printNumbers(from, to) {
    
    let timeId = setInterval(()=>{
        alert(from);
        if(from == to){
            clearInterval(timeId);
        }
        from++;
    }, 1000);
}

printNumbers(5,10);

// Q3

/* setTimeout will always run after code is done, so it will alert i of value 100000000, which is last value in loop */