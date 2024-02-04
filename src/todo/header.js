import { useSelector } from "react-redux";
import { login, logout } from "../stores/auth";
import { useDispatch } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginHandle = (user) => {
    dispatch(login(user));
  };

  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h2>Logo</h2>
      {!user && (
        <nav>
          <button
            onClick={() => loginHandle({ id: 1, username: "ogulcandogan" })}
          >
            ogulcandogan olarak giris yap
          </button>
          <button onClick={() => loginHandle({ id: 2, username: "deneme1" })}>
            deneme olarak giris yap
          </button>
        </nav>
      )}

      {user && (
        <nav>
          Hoşgeldin, {user.username}
          <button onClick={logoutHandle}>Çıkış yap</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
