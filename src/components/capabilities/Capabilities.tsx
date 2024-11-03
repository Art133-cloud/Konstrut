import styles from "./Capabilities.module.css";
import Container from "../basic/container/Container";
import Button from "../basic/button/Button";
import LineCapabilities from "../LineStory";
import CardCapabilities from "../basic/cardCapabilities/CardCapabilities";
import FirstImage from "../../../public/assets/png/firstImageCapabilities.png"
import SecondImage from "../../../public/assets/png/secondImageCapabilities.png"
import ThirdImage from "../../../public/assets/png/thirdImageCapabilities.png"
export default function Capabilities () {
    const cardsProps = [
        {
            src: FirstImage.src,
            title: "PROJECT AND CONSTRUCTION MANAGEMENT",
        },
        {
            src: SecondImage.src,
            title: "STRUCTURE AUDIT AND MAINTENANCE",            
        },
        {
            src: ThirdImage.src,
            title: "FACTORY CONSTRUCTION AND MODELING",
        },
    ]
    return (
        <Container>
            <div className={styles.contentCapabilities}>
                <div className={styles.topCapabilities}>
                    <div className={styles.titleCapabilities}>
                        <h2>OUR CAPABILITIES</h2>
                        <LineCapabilities />
                    </div>
                    <div className={styles.textWithButton}>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                        <Button text="ALL SERVICES"/>
                    </div>
                </div>
                <div className={styles.bottomCapabilities}>
                    {cardsProps.map((item,index) => {
                         return <CardCapabilities src={item.src} title={item.title} key={index}/>
                    })}
                </div>
            </div>
        </Container>
    )
} 