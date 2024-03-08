
export const checkValidData = (email,password) => {

const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
const isPasswordValid = /^[A-Za-z]{8}@[0-9]{2,}$/.test(password);
if(!isEmailValid) return "Email is not valid!";
if(!isPasswordValid) return "Password is not valid!";
return null;
}