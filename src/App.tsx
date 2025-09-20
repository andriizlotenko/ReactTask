import Profile from "./components/Profile";
import "./App.css";

function App() {
  const users = [
    { name: "Semen Petlyrik", role: "Frontend Developer", avatarUrl: "https://i.pravatar.cc/150?img=11" },
    { name: "Vovka Monopoliya", role: "Backend Developer", avatarUrl: "https://i.pravatar.cc/150?img=1" },
    { name: "Yaroslav Grivna", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=3" },
    { name: "DJ Aleg", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=4" },
    { name: "Geralt Witcher", role: "QA Engineer", avatarUrl: "https://i.pravatar.cc/150?img=12" },
    { name: "Fiona Shrek", role: "DevOps Engineer", avatarUrl: "https://i.pravatar.cc/150?img=15" },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles-container">
        {users.map((user, index) => (
          <Profile key={index} name={user.name} role={user.role} avatarUrl={user.avatarUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;
