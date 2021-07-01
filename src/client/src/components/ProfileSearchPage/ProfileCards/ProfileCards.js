import ProfileCard from "./ProfileCard";
const ProfileCards = ({ users, history}) => {
  return (
    <div className="profile_search_cards">
      {users.map((user) => (
            <ProfileCard user={user} history={history}/>
      ))}
    </div>
  );
};

export default ProfileCards;
