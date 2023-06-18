import styles from '../style';
import { discount, crane } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.sectionImg}`}>
    <div className={`${styles.sectionInfo} flex-1`}>
      <div className="flex flex-row items-center mb-2">
        <div className={`py-[6px] px-4 bg-discount-gradient rounded-[10px] ${styles.centerContent} mx-auto`}>
          <f1 className="flex text-white text-[20px]">
            Adding AI To the Toolkit of Every Construction Professional
          </f1>
        </div>
      </div>

      <div className={`flex flex-col items-center justify-center w-full text-center ${styles.centerContent}`}>
        <h1 className={`font-poppins font-semibold ss:text-[72px] text-[52px] text-white ${styles.heading2}`}>
          Spect AI <br className="sm:block hidden" />{" "}
          <span className="text-gradient">GPT Powered</span>
        </h1>
        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] text-white ${styles.heading2}`}>
          Virtual Assistant.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          To manage text-based data across construction projects. Perform search and QA/QC across specs, contracts, RFIs, and submittals.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
