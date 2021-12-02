const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
let domain = args[0];
let path = args[1];


request(domain, (error, response, body) => {
  
  if (error) {
    console.log('error:', error);
  }

  fs.writeFile(`${path}`,body , function(error) {
    if (error){
      console.log('error',error);
    }
    else {
    function getFilesizeInBytes(path) {
      var stats = fs.statSync(path);
      var fileSizeInBytes = stats.size;
      return fileSizeInBytes;
  }
  const res = getFilesizeInBytes(path);
      console.log(`Download and saved ${res} bytes to ${path}`);
}
})
})