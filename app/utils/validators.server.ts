export const validEmail = (email: string | undefined) => {
  const regEx =
    /"[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-](?:\.[a-zA-Z0-9-]+)*$/;

  if (!email?.length || !regEx.test(email)) {
    return "Please enter a valid email address";
  }
};

export const validPassword = (password: string | undefined) => {
  if (password !== undefined) {
    if (password.length < 5) {
      return "Password must be at least 5 characters";
    }
  }
  return "Password must be at least 5 characters";
};

export const validName = (name: string | undefined) => {
  if (!name?.length) {
    return "Please enter a valid name";
  }
};
