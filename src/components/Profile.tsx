import "./Profile.css";

type ProfileProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

export default function Profile({ name, role, avatarUrl }: ProfileProps) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="profile-avatar" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
