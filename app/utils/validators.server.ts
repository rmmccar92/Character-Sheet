export const validEmail = (email: string | undefined) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email?.length || !validRegex.test(email)) {
    return "Please enter a valid email address";
  }
};

export const validPassword = (password: string | undefined) => {
  if (!password?.length || password?.length < 5) {
    return "Please enter a password that is at least 5 characters long";
  }
};

export const validName = (name: string | undefined) => {
  if (!name?.length) {
    return "Please enter a valid name";
  }
};
