import styles from "../App.module.css"

export default function Card () {
    const movieName = "Pôster: Star Wars (1977)"
    const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid exercitationem ducimus omnis odit. Provident, nihil corrupti! Aliquam soluta at est cumque. Ea sequi quas perferendis facere autem similique! Qui."

    return (
        <div className={styles.card}>
            <img className={styles.poster} src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="poster do Star Wars" />
            <div>
                <h2>{movieName}</h2>
                <p>{description}</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}