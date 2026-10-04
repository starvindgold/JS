n=5;
for(let i=n-1;i>=0;i--) {
    let row = "";
    for(let j=0;j<=i;j++) {
        row+=(j+1);
    }
    console.log(row);
}