import PageTitle from '../PageTitle/PageTitle';
import {getFavoriteCards} from '../../redux/cardsRedux';
import {useSelector} from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favorites = useSelector((state) => getFavoriteCards(state));

  return (
    <div className={styles.centerDiv}>
      <PageTitle title={'favorite'} />
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favorites.map((favorite) => (
            <Card key={favorite.id} title={favorite.title} id={favorite.id} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
