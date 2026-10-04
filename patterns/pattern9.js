n=5;
for(let i=0;i<n;i++) {
    let row = " ".repeat(n-i-1);
    for(let j=0;j<i;j++) {
        row+="**";
    }
    row+="*";
    console.log(row);
}
for(let i=n-1;i>=0;i--) {
    let row = " ".repeat(n-i-1);
    for(let j=0;j<i;j++) {
        row+="**";
    }
    row+="*";
    console.log(row);
}