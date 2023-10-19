import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titles from 'components/Titles';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

const Player = () => {
    const [video, setVideos] = useState();

    const parameter = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ThaisMirandaA/cinetag-api/videos?id=${parameter.id}`)
            .then(response => response.json())
            .then(data => {
                setVideos(...data)
            })
    }, [])

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner image='player' />
            <Titles>
                <h1>Player</h1>
            </Titles>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;