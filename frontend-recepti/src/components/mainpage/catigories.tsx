import "./catigories.scss"

export default function Catigories() {
    return (
        <section id="categories" className="category-list">
        <h2>Категории Рецептов</h2>
        <ul>
            <li>
                <a href="#breakfast">Завтраки</a>
            </li>
            <li>
                <a href="#lunch">Ужины</a>
            </li>
            <li>
                <a href="#desserts">Десерты</a>
            </li>
        </ul>
    </section>
    )
}