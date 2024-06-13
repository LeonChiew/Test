console.log("----------------------------");
console.log("----------------------------");


//console.log($request.url);

const url = `https://api-user.soulapp.cn/setting/visible/save?bi=%5B%2219010cad0ce%22%2C%22--%22%2C%22Apple%22%2C%22iOS%22%2C%2217.5%22%2C%2217.5%22%2C%22iPhone%2014%20Pro%22%2C%223%22%2C%22393%2A852%22%2C%22AppStore%22%2C%22WiFi%22%2C%22zh%22%5D&bik=32243&pageId=HomePage_Setup`;
const method = `POST`;

const body = `isVisible=0`;

var mheaders = $request.headers;

var myRequest = {
    url: url,
    method: method,
    headers: mheaders,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done($response.body);
}, reason => {
    console.log(reason.error);
    $done($response.body);
});

//$done($response.body);
