import styles from './PageTitle.module.scss';

const PageTitle = ({title}) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default PageTitle;
