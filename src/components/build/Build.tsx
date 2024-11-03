import styles from "./Build.module.css";
import Button from "../basic/button/Button";
import Container from "../basic/container/Container";

export default function Build () {
    return (
        <div className={styles.contentBuild}>
            <Container>
                <div className={styles.parentForBuild}>
                    <h2>Want to build something amazing?</h2>
                    <Button text="GET IN TOUCH"></Button>
                </div>
            </Container>
        </div>
    )
}