export const strContains = (str1, str2) => {
  if (str1.toLowerCase().includes(str2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};
