import styles from './Card.module.scss';
import clsx from 'clsx';
// import Button from '../Button/Button';
import { FaRegStar, FaStar } from 'react-icons/fa';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { toggleCardFavorite } from "../../redux/store";
import { useEffect } from "react";

const Card = props => {

    const [isShownNotChosen, setIsShownNotChosen] = useState(true);
    const [isShownChosen, setIsShownChosen] = useState(false);

    // const [isFavorite, setIsFavorite] = useState(false);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(toggleCardFavorite(''));
    //   }, [dispatch])
    
        const handleClick = (e) => {
          e.preventDefault();
          setIsShownChosen(current => !current);
          setIsShownNotChosen(current => !current);



        //   dispatch(toggleCardFavorite(!isFavorite));
        //   setIsFavorite(!isFavorite);
 
        }


    return (
    <>
        <li className={styles.card}><p>{props.title}</p>

        <div onClick={handleClick} className={styles.container}>
                {isShownNotChosen && <FaRegStar className={styles.empty_star}/>}
                {isShownChosen && <FaStar className={styles.full_star}/>}
                 
        </div>

        
        </li>
        {/* <li className={clsx(styles.card, isFavorite && styles.isFavorite)}>{props.title}</li> */}
        
    </>

    );
};

export default Card;