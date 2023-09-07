function calculateArea({
  width,
  height,
}: {
  width: number;
  height: number;
}): number {
  return width * height;
}
console.log(calculateArea({ height: 10, width: 5 }));
