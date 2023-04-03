const url = "http://localhost:4377/";
// const reQ = new Promise(rej);
const fetchData = async (url) => {
  const req = new XMLHttpRequest();
  try {
    req.open("GET", url); // open channel
    req.send(); // send request
    const resp = await req.response;
    const resp2 = JSON.parse(resp);
    console.log(req);
    return resp2;
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
