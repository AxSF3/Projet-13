import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getProfil } from "../features/authSlice.js";
import { useSelector, useDispatch } from "react-redux";

const SharedProfilLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, message, isError, isRemembered, email } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getProfil());
    
    navigate(`/profile/${id}`);

    if (isRemembered) {
      localStorage.setItem(
        "rememberMe",
        JSON.stringify({ isRemembered, email })
      );
    }
  }, [dispatch, navigate, isError, message, id, isRemembered, email]);

  return (
    <>
      <main className="main bg-dark">
        <Outlet />
      </main>
    </>
  );
};
export default SharedProfilLayout;
