import "./header.scss"

export default function Header() {
    return (
        <header>
        <div className="logo">Обмен Рецептами</div>
        <nav>
            <ul>
                <li>
                    <a href="#home">Главная</a>
                </li>
                <li>
                    <a href="#recipes">Рецепты</a>
                </li>
                <li>
                    <a href="#categories">Категории</a>
                </li>
                <li>
                    <a href="#about">О нас</a>
                </li>
                <li>
                    <a href="#contact">Контакты</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}