import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, title, image, bio }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
