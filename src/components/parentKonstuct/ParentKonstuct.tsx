import styles from "./ParentKonstuct.module.css"
import SvgLogo from "@/public/assets/svg/Logo";
import Container from "../basic/container/Container";
export default function ParentKonstuct () {
    return (
        <div className={styles.contentParentKonstuct}>
            <Container>
                <div className={styles.logoParentKonstruct}>
                    <SvgLogo />
                </div>
                <div className={styles.centerTexts}>
                    <h1>PARTNER WITH KONSTUCT</h1>
                    <p>An award-winning construction management firm</p>
                </div>
                <div className={styles.bottomText}>
                    <p>SCROLL DOWN</p>
                </div>
            </Container>
        </div>
    )
}