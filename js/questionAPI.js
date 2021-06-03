var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=a32a8a8cda16570244d1f56f6313a967");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://opentdb.com/api.php?amount=10", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));