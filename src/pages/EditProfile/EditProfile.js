import { useEffect } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import "./EditProfile.css";

const EditProfile = () => {
  const { loadCurrentUser, currentUser } = useCurrentUser();

  useEffect(() => {
    loadCurrentUser();
  }, [loadCurrentUser]);

  const user = currentUser;

  return (
    user && (
      <form className="editProfile">
        <div className="editProfile__top">
          <img
            src={
              user.photo
                ? user.photo
                : "https://i.scdn.co/image/ab67616d0000b2736f79fa715039164d02ddf1a8"
            }
            alt={user.name}
            className="editProfile__photo"
            height="150"
            width="150"
          />
          <div className="editProfile__data">
            <div className="editProfile__names">
              <input
                type="text"
                className="editProfile__name"
                value={user.name}
              ></input>
              <div>
                <span className="editProfile_username-prepend">@</span>
                <input
                  className="editProfile__username"
                  value={user.username}
                ></input>
              </div>
            </div>
            <input
              type="text"
              className="editProfile__bio"
              value={user.bio ? user.bio : "Hello, I'm new at Frenemies!"}
            ></input>
          </div>
        </div>
        <button type="submit" className="edit-button">
          Save changes
        </button>
      </form>
    )
  );
};

export default EditProfile;
