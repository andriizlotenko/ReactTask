import Profile from "./components/Profile";
import "./App.css";

function App() {
  const users = [
    { name: "Alice Mclaren", role: "Frontend Developer", avatarUrl: "https://i.pravatar.cc/150?img=20" },
    { name: "Bob Marley", role: "Backend Developer", avatarUrl: "https://i.pravatar.cc/150?img=12" },
    { name: "Charlie Brown", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=3" },
    { name: "Diana Prince", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=41" },
    { name: "Geralt Withcer", role: "QA Engineer", avatarUrl: "https://i.pravatar.cc/150?img=14" },
    { name: "Fiona Shrek", role: "DevOps Engineer", avatarUrl: "https://i.pravatar.cc/150?img=16" },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles-container">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
