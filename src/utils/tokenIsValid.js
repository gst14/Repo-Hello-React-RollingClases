import jwtDecode from "jwt-decode";

export function tokenIsValid() {
  let tokenStore = localStorage.getItem("token");
  if (!tokenStore) {
    return false;
  }
  const { exp } = jwtDecode(tokenStore);
  const expirationTime = exp * 1000 - 60000;
  if (Date.now() >= expirationTime) {
    return false;
  }
  return true;
}