const url = "http://localhost:4377/";
// const reQ = new Promise(rej);
const fetchData = async (url) => {
  const req = new XMLHttpRequest();
  try {
    req.open("GET", url); // open channel
    req.send(); // send request
    const resp = await req.response;
    // const resp2 = JSON.parse(resp);
    console.log(req);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

fetchData(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


  // const eventsContainer = document.getElementById("lessons");
  // events.map(function (event) {
  //   eventsContainer.innerHTML += `
  //   ${lessons}
  // `;
  // });
  

  const request = new XMLHttpRequest();

try {
  request.open('GET', 'http://localhost:4377/');

  request.responseType = 'json';

  request.addEventListener('load', () => initialize(request.response));
  request.addEventListener('error', () => console.error('XHR error'));

  request.send();

} catch (error) {
  console.error(`XHR error ${request.status}`);
}
