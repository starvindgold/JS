function printPattern(n) {
    for(let i=n;i>=1;i--) {
        let row="";
        let k=n;
        for(let j=0;j<n;j++){
            row+=Math.max(k--,i);
        }
        k++;
        for(let j=0;j<n-1;j++){
            row+=Math.max(++k,i);
        }
        console.log(row);
    }
    for(let i=2;i<=n;i++) {
        let row="";
        let k=n;
        for(let j=0;j<n;j++){
            row+=Math.max(k--,i);
        }
        k++;
        for(let j=0;j<n-1;j++){
            row+=Math.max(++k,i);
        }
        console.log(row);
    }
}

printPattern(4);