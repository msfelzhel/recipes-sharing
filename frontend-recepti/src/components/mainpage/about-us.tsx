import "./aboutus.scss"

export default function AboutUs() {
    return (
        <><section id="about" className="about-section">
        <h2>О Нас</h2>
        <p>
            Мы - сообщество любителей кулинарии, стремящихся делиться своими рецептами и вдохновлять других
            готовить.
        </p>
    </section>
    <footer>
        <p>&copy; 2024 Обмен Рецептами. Все права защищены.</p>
        <nav className="footer-nav">
            <ul>
                <li>
                    <a href="#privacy">Политика конфиденциальности</a>
                </li>
                <li>
                    <a href="#terms">Условия использования</a>
                </li>
            </ul>
        </nav>
    </footer></>
    )
}