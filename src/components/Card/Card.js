import styles from "./Card.module.scss";
// import clsx from "clsx";
import {FaRegStar, FaStar, FaTrash} from "react-icons/fa";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {toggleCardFavorite} from "../../redux/cardsRedux";
// import {useEffect} from "react";
// import {useSelector} from "react-redux";
// import {getFavoriteCards} from "../../redux/store";

const Card = (props) => {
  const [isShownNotChosen, setIsShownNotChosen] = useState(true);
  const [isShownChosen, setIsShownChosen] = useState(false);

  const [isNotDeleted, setIsNotDeleted] = useState(true);

  const dispatch = useDispatch();

  const changeFavorites = (e) => {
    e.preventDefault();
    setIsShownChosen((current) => !current);
    setIsShownNotChosen((current) => !current);

    // setIsNotDeleted(false);

    dispatch(toggleCardFavorite(props.id));
  };

  const deleteCard = (e) => {
    e.preventDefault();

    setIsNotDeleted(false);

    // dispatch(toggleCardFavorite(props.id));
  };

  return (
    <>
      {isNotDeleted && (
      <div>
        <li className={styles.card}>
          <p>{props.title}</p>

          <div className={styles.icon_wrapper}>
            <div onClick={changeFavorites} className={styles.container}>
              {isShownNotChosen && <FaRegStar className={styles.empty_star} />}
              {isShownChosen && <FaStar className={styles.full_star} />}
            </div>

            <div onClick={deleteCard} className={styles.container}>
              <FaTrash className={styles.trash}/>
            </div>
          </div>
        </li>
        {/* <li className={clsx(styles.card, isFavorite && styles.isFavorite)}>{props.title}</li> */}
      </div>

      )}


    </>



  );
};

export default Card;
