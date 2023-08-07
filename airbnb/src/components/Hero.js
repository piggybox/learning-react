import photo_grid from "../images/photo-grid.png"

export default function Hero () {
    return (
        <section>
            <img src={photo_grid} alt="heroes" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}