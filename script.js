// Good Luck 💪🏾
function count(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  // Test cases
  console.log(count("a", "fikrcamp")); // 1
  console.log(count("c", "bootcamp")); // 1
  console.log(count("o", "fikrcamp coding bootcamp")); // 3
  