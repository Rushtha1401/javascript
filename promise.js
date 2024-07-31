/*isLocationFound=(loc,time)=>{
    isLoc="SKCET";
    t=2000;
    if(loc===isLoc && time===t)
    {
        return true;
    }
    else
    {
        return false;
    }
};
function locationFinder(){
    time=2000;
    loc="SCET";
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound("Location Found");
            }
            else{
                locNotFound("Location Not Found");
            }
        },time);
    })
}
locationFinder()
.then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
})*/


/*isLocationFound=(loc,time)=>{
    isLoc="SKCET";
    t=2000;
    if(loc===isLoc && time===t)
    {
        return true;
    }
    else
    {
        return false;
    }
};
function locationFinder(){
    time=2000;
    loc="SKCET";
    let prom=new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound("Location Found");
            }
            else{
                locNotFound("Location Not Found");
            }
        },time);
    })
    return prom;
}
locationFinder()
.then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
})*/