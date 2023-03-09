import { redirect } from "react-router-dom";

export const action = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("userLocalId");
  localStorage.removeItem("persist:root");
  return redirect("/");
};
