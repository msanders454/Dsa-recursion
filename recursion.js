
//1. Counting Sheep

function countingSheep(sheepNum) {
    if(sheepNum === 0){
      return console.log("All sheeps jumped over the fence");
    }
    console.log(`${sheepNum}: Another sheep jumps over the fence`)
    return countingSheep(sheepNum - 1)
  }

  countingSheep(10)


//2. Power Calculator

function calculator(base, exp) {
  if (exp <= 0) {
      return console.log('exp should be >= 0')
  };

  let total = 1;
  for (let i = 1; i <= exp; i++) {
      total = total * base;
  }
  return console.log(total);
}
calculator(10, 2)


//3. Reverse String

function reverseString(string) {
  if (string === "") return console.log("");
  return console.log(reverseString(string.substr(1)) + string.charAt(0))
}
stringReverse("string")


//4. nth Triangular Number

function triNumber(n) {
  if (n <= 1) return n;
  return n + triNumber(n - 1)
} 

console.log(triNumber(5))


//5.  String Splitter

function split(string) {
  if (string === 3) return console.log(string);
  result.push(string.substr(0, 2))
  console.log(result)
  return split(string)
}
split('02/20/2020')


//6. Fibonacci

function fib(n) {
  if (n === 1) return [0, 1];
  let x = fib(n - 1);
  x.push(x[x.length - 1] + x[x.length - 2]);
  return x;
}
console.log(fib(5))


//7. Factorial

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(9))


//8. Find a way out of the maze

//9. Find ALL the ways out of the maze

function mazeFind() {
  let mySmallMaze = [
      [' ', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', 'e']
  ];
  maze = mySmallMaze;
  console.log(maze.length)



  this.traverse = function (column, row) {
      if (maze[column][row] === 'e') {
          console.log("We solved the maze at (" + column + ", " + row + ")");
      } else if (maze[column][row] === '') {
          console.log("At valid position (" + column + ", " + row + ")");
          maze[column][row] = 2;
          if (column < maze.length - 1) {
              this.traverse(column + 1, row);
          }
          if (row < maze[column].length - 1) {
              this.traverse(column, row + 1);
          }
          if (column > 0) {
              this.traverse(column - 1, row);
          }
          if (row > 0) {
              this.traverse(column, row - 1);
          }
      }
  };

};
mazeFind()


//10. Anagrams

const anagrams = function(prefix, word) {

  if (word.length <= 1) {
      console.log(prefix + word);
  } else {
      for (let i = 0; i < word.length; i++) {
          const nextLetter = word.substring(i, i + 1);
          const before = word.substring(0, i);
          const after = word.substring(i + 1);
          anagrams(prefix + nextLetter, before + after);
      }
  }

}

anagrams('', 'east');


//11. Organization Chart


const organizationChart = function(org, boss) {
  let hierarchy = {};
  org
      .filter(person => person.boss === boss)
      .forEach(person => hierarchy[person.name] = organizationChart(org, person.name))
  return hierarchy;
}



//12. Binary Representation

function binaryRep(num) {
  if (num === 0) {
      return '0';
  }
  const divideNum = Math.floor(num / 2);
  const remainder = num % 2;
  if (divideNum === 0) {
      return `${remainder}`;
  }
  return binaryRep(divideNum) + remainder.toString();
};

console.log(binaryRep(3));
console.log(binaryRep(25));













