function myF(e) {
var navigationStart = performance.timing.navigationStart;
var LoadEnd = performance.timing.loadEventEnd;
var PageLoadTime = new Date().getTime() - navigationStart;
var PageLoad = LoadEnd - navigationStart;
var value = navigationStart+","+LoadEnd+","+PageLoadTime+","+PageLoad;
return value;
}