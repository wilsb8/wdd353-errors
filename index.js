var http = require('http'); // changed the require to http from htt, obvious syntax error

function myname(){ // fixed the function syntax, also an obvious syntax error
  return "Here is my IP address"; // console.log should be a return
}
async function callHttpbin() { // added async and fixed typo
  let promise = new Promise((resolve, reject) => {
    http.get(
      'http://httpbin.org/ip',
      function(response) {
        var str="";
        response.setEncoding('utf8');
        response.on('data', function(data){
        str += data;
      });
      response.on('end', function() {
        var result = JSON.parse(str); 
        let myips = result.origin; // myips should read 'let myips'
        resolve(myips) // added myips to resolve
      });
     }
    );  
});
result = await promise; // removed let
return result; // this should read return result
}
async function executeAsyncTask() { // changed to async function
  const valueA = await callHttpbin()
  const valueB = myname();
  console.log(valueB+" "+valueA)
} // added missing }

executeAsyncTask(); // call function

// Output: Here is my IP address 174.50.171.65