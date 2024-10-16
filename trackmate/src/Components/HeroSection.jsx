import styles from './Hero.module.css'
import heroImage from '../Images/page1-background.webp'

const HeroSection = () => {
  return (
    <div className={styles.container}>
        < div className={styles.heroContainer}>
            <div className={styles.freeDownload}>
                <div>
                    <h3>Free download</h3>
                    <p>$0.00</p>
                </div>
                <div>USD drop down</div>
            </div>
            <div className={styles.heroAndText}>
                <div className={styles.heroText}>
                    <h3>Own your daily routine</h3>
                    <h1>0.4 TrackMate XE </h1>
                    <h3>A health tracker that motivates you every step of the way</h3>
                </div>
                <div className={styles.heroImage}>
                    <img src={heroImage} alt="hero" style={{width:'100%',height:'100%'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection