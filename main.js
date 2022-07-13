
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}
