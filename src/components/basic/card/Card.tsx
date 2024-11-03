import styles from './Card.module.css';

interface Card {
    width: string
    src: string; 
    text: string; 
}

export default function CardItem({width ,text, src }: Card) { 
    return (
        <div className={styles.cardItem} 
        style={{background: `url(${src})`, backgroundRepeat: "no-repeat"}}>
            <h3 style={{width: width}}>{text}</h3>
        </div>
    );
}