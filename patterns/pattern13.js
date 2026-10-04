n=5;
let k=1;
for(let i=0;i<n;i++) {
    let row="";
    for(let j=0;j<=i;j++) {
        row+=" "+(k++);
    }
    console.log(row);
}