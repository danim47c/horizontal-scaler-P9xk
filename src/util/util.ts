export const sleep = async (m: number) =>
  new Promise((resolve) => setTimeout(resolve, m * 60 * 1000));
