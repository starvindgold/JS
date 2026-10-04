function printPattern(n) {
    
    for(let i=0;i<n;i++) {
        let row = "" ;
        for(let j=0;j<=i;j++){
            row+="*";
        }
        row+=" ".repeat(2*(n-i-1));
        for(let j=0;j<=i;j++){
            row+="*";
        }
        console.log(row);
    }
    for(let i=n-2;i>=0;i--) {
        let row = "" ;
        for(let j=0;j<=i;j++){
            row+="*";
        }
        row+=" ".repeat(2*(n-i-1));
        for(let j=0;j<=i;j++){
            row+="*";
        }
        console.log(row);
    }
}

printPattern(5);