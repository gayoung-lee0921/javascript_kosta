onmessage = function(event){
    const rcvData = event.data // 미네랄을 캐렴이란 메시지를 받는 변수
    stopOperation();
    this.postMessage(rcvData)
}

function stopOperation(){
    const endTime =  new Date().getTime() + 5000;
    while(new Date().getTime()<endTime){;}
    //int i=0;
}