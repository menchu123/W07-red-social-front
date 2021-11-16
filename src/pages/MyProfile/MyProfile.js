import { useEffect } from "react";
import { useNavigate } from "react-router";
import useCurrentUser from "../../hooks/useCurrentUser";
import "./MyProfile.css";

const MyProfile = () => {
  const { loadCurrentUser, currentUser } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    loadCurrentUser();
  }, [loadCurrentUser]);

  const user = currentUser;

  return (
    user && (
      <section className="profile">
        <div className="profile__top">
          <img
            src={
              user.photo
                ? user.photo
                : "https://i.scdn.co/image/ab67616d0000b2736f79fa715039164d02ddf1a8"
            }
            alt={user.name}
            className="profile__photo"
            height="150"
            width="150"
          />
          <div className="profile__data">
            <div className="profile__names">
              <span className="profile__name">{user.name}</span>
              <span className="profile__username">@{user.username}</span>
            </div>
            <div className="profile__bio">
              {user.bio ? user.bio : "Hello, I'm new at Frenemies!"}
            </div>
          </div>
        </div>
        <button
          className="edit-button"
          onClick={() => {
            navigate("/editprofile");
          }}
        >
          Edit
        </button>
      </section>
    )
  );
};

export default MyProfile;
