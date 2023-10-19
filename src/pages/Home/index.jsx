import styles from "./Home.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import Titles from "components/Titles";
import { useEffect, useState } from "react";

const Home = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ThaisMirandaA/cinetag-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <>
            <Banner image='home' />
            <Titles><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titles>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Home; 