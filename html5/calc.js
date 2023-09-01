onmessage = function(event){
    console.log(event.data)
    this.postMessage(event.data*event.data)
}
