import styles from "./Story.module.css";
import LineStory from "../LineStory";
import Container from "../basic/container/Container";
import CardItem from "../basic/card/Card";
import FirstImg from "../../../public/assets/png/Bitmap.png";
import SecondImg from "../../../public/assets/png/secondBitmap.png"
import ThirdImg from "../../../public/assets/png/thirdBitmap.png"
const cards = [
    {
        src: FirstImg.src,
        text: "WE PLAN",
        width: "68px"
    },
    {
        src: SecondImg.src,
        text: "WE MANAGE",
        width: "110px"
    },
    {
        src: ThirdImg.src,
        text: "WE BUILD",
        width: "76px"
    },
]
export default function Story () {
    return (
        <Container>
            <div className={styles.contentStory}>
                <div className={styles.titleStory}>
                    <h2>OUR STORY</h2>
                    <LineStory />
                </div>
                <div className={styles.bottomContentStory}>
                    <div className={styles.textsStory}>
                        <h3>Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management firm</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                    </div>
                    <div className={styles.cardsStory}>
                        {cards.map ((item,index) => {
                            return <CardItem
                            key={index} 
                            width={item.width}
                            text={item.text}
                            src={item.src}
                            />
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
}