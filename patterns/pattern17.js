function printPattern(n) {
    for(let i=0;i<n;i++) {
        let row = " ".repeat(n-i-1);
        for(let j=0;j<=i;j++){
            row+=String.fromCharCode(j+65);
        }
        for(let j=i-1;j>=0;j--){
            row+=String.fromCharCode(j+65);
        }
        console.log(row);
    }
}

printPattern(5);