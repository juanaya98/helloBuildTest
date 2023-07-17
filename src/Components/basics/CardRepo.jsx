import { useState } from "react";
import Star from "../../assets/Star.png";
import StarBasic from "../../assets/StarBasic.png";
import "./CardRepo.css";

const CardRepo = ({
  id,
  name,
  privacy,
  url,
  description,
  isFavorite,
  setIsFavorite,
  disableFavorite
}) => {
  return (
    <main className={`repositoryCard `}>
      <section className="repositoryCard__header">
        <button
          className="repositoryCard__favorite"
          type="button"
          onClick={() => setIsFavorite((prev) => [...prev, id])}
          disabled={disableFavorite}
        >
          <img
            src={isFavorite === false ? StarBasic : Star}
            style={{ width: "50px", height: "50px" }}
            alt="star"
          />
        </button>
        <span className="repositoryCard__title">{name}</span>
      </section>

      <section className="repositoryCard__body">
        <span>
          <b>Privacy:</b> {privacy ? "Private" : "Public"}
        </span>
        <span className="repositoryCard__label">
          <b>Description:</b> {description || "No description"}
        </span>
      </section>

      <section className="repositoryCard__footer">
        <a href={url} target="_blank">
          View
        </a>
      </section>
    </main>
  );
};

export default CardRepo;
