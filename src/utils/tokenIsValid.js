import jwtDecode from "jwt-decode";

export function tokenIsValid(token) {
  let tokenStore = localStorage.getItem("token");
  if (!tokenStore) {
    return false;
  }
  const { exp } = jwtDecode(token);
  const expirationTime = exp * 1000 - 60000;
  if (Date.now() >= expirationTime) {
    return false;
  }
  return true;
}