function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const value = getFirstElement(["piyush", "raj"]);
console.log(value.toLowerCase())