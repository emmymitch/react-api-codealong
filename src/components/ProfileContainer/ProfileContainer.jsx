import "./ProfileContainer.scss";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfileContainer = ({userList}) => {
    const profileList = userList.map((user) => {
        return (
          <ProfileCard 
          keyVal={user.id.value}
          name={`${user.name.first} ${user.name.last}`} 
          image={user.picture.large} 
          email={user.email} 
          phoneNumber={user.cell} 
          />
        )
      })

    return (
        <section className="profile-container">{profileList}</section>
    );
}

export default ProfileContainer;