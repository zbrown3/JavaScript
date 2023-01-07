process.stdin.on('data', (userInput) => {
    let input = userInput.toString()
    console.log(input)
    process.exit();
  });