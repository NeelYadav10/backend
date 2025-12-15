const url=require("url")
const path="http://darshan.ac.in/abc.js?fn=arjun&ln=bala"
const data=url.parse(path)
console.log("url: ",path);
console.log("protocol: ",data.protocol)
console.log("hostname: ",data.hostname)
console.log("pathname: ",data.pathname)
console.log("querry params: ",data.query)