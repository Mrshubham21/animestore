import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useAuth();

  return (
    <header className="admin-topbar">
      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <div id="heroos">
        <p id="decc">
          {user?.name}
        </p>

        <p id="decc">
          {user?.role}
        </p>
      </div>
    </header>
  );
};

export default Topbar;  