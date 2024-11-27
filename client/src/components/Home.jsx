import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home; 