import styles from './SecondSection.module.css'
import workout from '../Images/workout-tracking muscke.webp'
import phones from '../Images/page-2 image.webp'
import rightColor from '../Images/backG3.jpg'


const SecondSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.firstContainer}>
        
              
                
                    <div className={styles.topSection}>

               
                    <img src={workout} alt="workout" />
                    <h3>
                        
                        WORKOUT TRACKING
                    </h3>
                    </div>
                <h3>
                Fine Tune Your Routine With Precise Workout Stats
                </h3>
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
           
            
        </div>

        <div className={styles.secondContainer}>
            <img src={phones} alt="Phone and watch" style={{width:'100%',height:'100%'}} />
        </div>

        <div className={styles.thirdContainer}>
            <img src={rightColor} alt="color" style={{width:'100%',height:'100%'}} />
        </div>
    </div>
  )
}

export default SecondSection