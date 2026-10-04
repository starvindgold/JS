function printPattern(n) {
    for(let i=n-1;i>=0;i--) {
        let row = "" ;
        for(let j=0;j<=i;j++){
            row+=String.fromCharCode(j+65);
        }
        console.log(row);
    }
}

printPattern(5);