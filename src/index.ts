export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const avg = (arr: number[]) => {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

