import { useEffect, useMemo, useState } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import "./EditProfile.css";

const EditProfile = () => {
  const { loadCurrentUser, currentUser } = useCurrentUser();

  const initialValues = useMemo(() => {
    return {
      name: "",
      username: "",
      bio: "",
    };
  }, []);

  useEffect(() => {
    loadCurrentUser();
  }, [loadCurrentUser]);

  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    if (currentUser.name) {
      setUser({ ...currentUser });
    }
  }, [currentUser]);

  const onChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  return (
    currentUser && (
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
                id="name"
                className="editProfile__name"
                value={user.name}
                onChange={(event) => onChange(event)}
              ></input>
              <div>
                <span className="editProfile_username-prepend">@</span>
                <input
                  id="username"
                  className="editProfile__username"
                  value={user.username}
                  onChange={(event) => onChange(event)}
                ></input>
              </div>
            </div>
            <input
              type="text"
              id="bio"
              className="editProfile__bio"
              value={user.bio ? user.bio : "Hello, I'm new at Frenemies!"}
              onChange={(event) => onChange(event)}
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
