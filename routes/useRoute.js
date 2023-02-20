import React from "react";
import AuthNav from "./authNav";
import OtherNav from "./otherNav";

export default function useRoute(isAuth) {
  if (!isAuth) {
    return <AuthNav />;
  } else {
    return <OtherNav />;
  }
}
