import styles from './Favorite.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import Titles from 'components/Titles';
import { useFavoriteContext } from 'context/Favorite';

const Favorite = () => {
    const { favorites } = useFavoriteContext();
    return (
        <>
            <Banner image="favorite" />
            <Titles><h1>Meus favoritos</h1></Titles>
            <section className={styles.container}>
                {favorites.map((favorite) => {
                    return <Card  {...favorite} key={favorite.id} />
                })}
            </section>
        </>
    )
}

export default Favorite;

