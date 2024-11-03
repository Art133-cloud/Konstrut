import styles from "./SignUp.module.css";
import Container from "../basic/container/Container";
import Button from "../basic/button/Button";

export default function SignUp () {
    return (
        <div className={styles.contentSignUp}>
            <Container>
                <div className={styles.parentSignUp}>
                    <h2>Newsletter Signup</h2>
                    <form>
                        <input type="email" placeholder="test@youremail.com" required/>
                        <Button text="SIGNUP"></Button>
                    </form>
                    </div>
            </Container>
        </div>
    )
}
