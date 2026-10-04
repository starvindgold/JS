function printPattern(n) {
    
    for(let i=0;i<n;i++) {
        let row = "" ;
        if(i==0){
            for(let j=0;j<n;j++){
                row+="*";
            }
            for(let j=0;j<n;j++){
                row+="*";
            }
        } else {
            row+="*"+" ".repeat(2*(n-1))+"*";
        }
        console.log(row);
    }
    for(let i=n-1;i>=0;i--) {
        let row = "" ;
        if(i==0){
            for(let j=0;j<n;j++){
                row+="*";
            }
            for(let j=0;j<n;j++){
                row+="*";
            }
        } else {
            row+="*"+" ".repeat(2*(n-1))+"*";
        }

        console.log(row);
    }
}

printPattern(5);