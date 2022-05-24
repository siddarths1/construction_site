var http = require("http");
var url = require("url");
var querystring = require("querystring");

function onRequest(request,response)
{
    var path = url.parse(request.url).pathname;
    console.log(path);
    var query = url.parse(request.url).query;
    console.log(query);
    var namelog = querystring.parse(query)["idlogin"];
    var passlog = querystring.parse(query)["pass"];
    response.write("login_name: "+namelog) ;
    response.write("<br>");
    response.write("login_password: "+passlog);
    response.end();
    // var namereg = querystring.parse(query)["idreg"] 
    // var emailreg = querystring.parse(query)["email"] 
    // var passreg = querystring.parse(query)["passreg"] 
    // var condreg = querystring.parse(query)["cond"] 
    // var submitreg = querystring.parse(query)["subreg"] 
    // response.write("reg_name:"+namereg)
    // response.write("reg_eamil:"+emailreg)
    // response.write("reg_pass:"+passreg)
    // response.write("reg_agree:"+conreg)
    // response.write("reg_submit:"+submitreg)


    
}
http.createServer(onRequest).listen(8500);
console.log("stats");
