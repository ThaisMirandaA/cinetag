import { useFavoriteContext } from 'context/Favorite'
import styles from './Card.module.css'
import unfavoriteIcon from './favorite_outline.png'
import favoriteIcon from './favorite.png'
import { Link } from 'react-router-dom'

const Card = ({ id, capa, titulo }) => {
    const { favorites, addFavorite } = useFavoriteContext();
    const isFavorite = favorites.some(video => video.id === id);
    const icon = isFavorite ? favoriteIcon : unfavoriteIcon;

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.cover} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon} alt='Favoritar filme' className={styles.favorite} onClick={() => { addFavorite({ id, titulo, capa }) }} />
        </div>
    )
}

export default Card; 