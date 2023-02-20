import React from "react";
import AuthNav from "./authNav";
import MainNav from "./mainNav/mainNav";
import OtherNav from "./otherNav";

export default function useRoute(isAuth) {
  if (!isAuth) {
    return <AuthNav />;
  } else {
    return <OtherNav />;
  }

  return null;
}
