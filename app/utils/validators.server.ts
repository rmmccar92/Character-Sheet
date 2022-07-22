export const validEmail = (email: string | undefined) => {
  return typeof email === "string" && email.length > 3 && email.includes("@");
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
