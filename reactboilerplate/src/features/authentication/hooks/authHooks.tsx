import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { setToken } from "../authslice/authSlice";
import type { RootState,AppDispatch } from "../../../store/store";

const useAuthHooks = () => {
  const dispatch: AppDispatch = useDispatch(); // Use the typed dispatch
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; // Create a typed selector

  const toggletoken = async (token: string): Promise<void> => {
    try {
      dispatch(setToken(token));
    } catch (err) {
      console.error("Error dispatching setToken:", err);
    }
  };

  const isAuthenticated = useTypedSelector(
    (state) => state.authenticatorSlice?.token
  );

  return {
    toggletoken,
    isAuthenticated,
  };
};

export default useAuthHooks;
