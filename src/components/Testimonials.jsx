import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";
import Book from "./Book";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
  
  <div >

    {/* gradient start */}
    <div className="absolute z-[3] -left-1/2 top-0 w-[70%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[70%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    {/* gradient end */}
  </div>

  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Book a Demo Now 
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Talk with our senior team and see how our product revolutionizes your projects expierience. 
    </p>
  </div>
  <div className={`${styles.flexCenter} ${styles.wFull}`} style={{ marginTop: '30px' }}>
  <Book  />
</div>





  </section>
);

export default Testimonials;

