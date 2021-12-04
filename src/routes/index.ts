export const index = (req: any, res: { text?: string; send: any; }) => {
  console.log('Hello Friend with a semi-colon');
  res.send('Hello Project!');
};
