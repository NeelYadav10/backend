const url = new URL("https://darshan.ac.in");
url.pathname='abc.js'
url.searchParams.append("fn",'arjun')
url.searchParams.append("ln",'bala')
console.log(url.toString());