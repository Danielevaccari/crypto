onmessage = (event) => {
  let i = 0;

  for (let index = 0; index < 1000000000; index++) {
    i += index;
  }

  postMessage(i);
};