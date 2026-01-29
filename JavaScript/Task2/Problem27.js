while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);

  if (randomNumber === 7) {
    break;
  }
}