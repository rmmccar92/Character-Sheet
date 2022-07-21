export const validEmail = (email: string | undefined) => {
  return typeof email === "string" && email.length > 3 && email.includes("@");
};

// export const validPassword = (password: string | undefined) => {
//   if (password !== undefined) {
//     if (password.length < 5) {
//       return "Password must be at least 5 characters";
//     }
//   }
//   return "Password must be at least 5 characters";
// };

export const validName = (name: string | undefined) => {
  if (!name?.length) {
    return "Please enter a valid name";
  }
};
