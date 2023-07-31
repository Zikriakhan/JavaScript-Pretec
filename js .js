let tableOf = 2;
let itr = 1;
let id = setInterval((sec) => {
   
    
    // console.log(a) / 
    if(itr <= 10){
        console.log(`${tableOf} x ${itr} = ${tableOf*itr}`)
        itr++;
    }else if(tableOf > 99)
    {
        exit;
    }
    else{
        itr=1;
        tableOf++;
    }

    
}, 1000);
// clearInterval()
