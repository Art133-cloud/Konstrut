import styles from "./Header.module.css"
import Container from "../../components/basic/container/Container";
import Navbar from "../navBar/Navbar";
export default function Header () {
    return (
        <header className={styles.header}>
            <Container>
                <Navbar/>   
            </Container>
        </header>
    )
}