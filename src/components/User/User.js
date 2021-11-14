import "./User.css";

const User = ({ user }) => {
  return (
    <section className="user">
      <div className="user__top">
        <img
          src={
            user.photo
              ? user.photo
              : "https://i.scdn.co/image/ab67616d0000b2736f79fa715039164d02ddf1a8"
          }
          alt={user.name}
          className="user__photo"
          height="150"
          width="150"
        />
        <div className="user__data">
          <div className="user__names">
            <span className="user__name">{user.name}</span>
            <span className="user__username">@{user.username}</span>
          </div>

          <div className="friend-buttons">
            <button className="friend-button friend-button--friend">:)</button>
            <button className="friend-button friend-button--enemy">:(</button>
          </div>
        </div>
      </div>
      <div className="user__bio">
        {user.bio ? user.bio : "Hello, I'm new at Frenemies!"}
      </div>
    </section>
  );
};

export default User;
