import styles from "./Container.module.css";
import React, {ReactNode} from "react";
interface Child {
    children: ReactNode
}
const Container: React.FC<Child> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
export default Container