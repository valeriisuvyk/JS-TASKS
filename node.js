const countSymbols = (string, letter, boolean = false) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (boolean) {
        if (string[i].toLowerCase() == letter.toLowerCase()) {
          count += 1;
        }
      } else {
        if (string[i] == letter) {
          count += 1;
        }
      }
    }
    return count;
  };
  
  console.log(countSymbols("Antony Smith", "s", true)); // 1
  console.log(countSymbols("Antony Smith", "s", false)); // 0
  console.log(countSymbols("Antony Smith", "s")); // 0
