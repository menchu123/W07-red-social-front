import "./User.css";

const User = () => {
  return (
    <section className="user">
      <div className="user__top">
        <img
          src="https://cdn.discordapp.com/attachments/896125607170179202/901820331956789248/IMG_3318.jpg"
          alt=""
          className="user__photo"
          height="150"
          width="150"
        />
        <div className="user__data">
          <div className="user__names">
            <span className="user__name">Elsa</span>
            <span className="user__username">@elsithecroc</span>
          </div>

          <div className="friend-buttons">
            <button className="friend-button friend-button--friend">:)</button>
            <button className="friend-button friend-button--enemy">:(</button>
          </div>
        </div>
      </div>
      <div className="user__bio">
        Hola por favor dame comida no he comido nunca por favor señor deme de
        comer tengo hambre
      </div>
    </section>
  );
};

export default User;
