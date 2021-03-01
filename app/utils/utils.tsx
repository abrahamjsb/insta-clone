export const shortenUsername = (username: string): string => {
  return username.length > 12 ? `${username.slice(0, 12)}...` : username;
};
