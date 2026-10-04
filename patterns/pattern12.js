n=5;
for(let i=0;i<n;i++) {
    let row ="";
    for(let j=0;j<n;j++) {
        if(j<=i){
            row+=(j+1);
        } else {
            row+=" ";
        }

    }
    for(let j=n-1;j>=0;j--) {
        if(j<=i){
            row+=(j+1);
        } else {
            row+=" ";
        }

    }
    console.log(row);
}