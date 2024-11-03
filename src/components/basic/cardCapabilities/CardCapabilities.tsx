import styles from "./CardCapabilities.module.css";
interface CardProps {
    src: string,
    title: string,
}
export default function CardCapabilities ({src,title}: CardProps) {
    return (
        <div className={styles.cardItemCapabilities}>
            <img src={src} alt="cardImage" />
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
        </div>
    )
}