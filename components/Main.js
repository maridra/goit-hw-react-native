import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStateChange } from "../redux/auth/authSelectors";
import authOperations from "../redux/auth/authOperations";
import useRoute from "../routes/useRoute";

export default function Main() {
  const stateChange = useSelector(selectStateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.authStateChangeUser());
  }, []);

  const rouring = useRoute(stateChange);

  return <NavigationContainer>{rouring}</NavigationContainer>;
}
