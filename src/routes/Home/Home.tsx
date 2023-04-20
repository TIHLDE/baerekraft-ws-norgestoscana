import { Logo } from "../../components/Logo";
import styles from "./Home.module.css";
import { About } from "../About/About";
import { Services } from "../Services/Services";

import service1Image from "../../assets/serviceImages/service1-2.jpg"

export const Home = () => {
  return (
    <>
      <section id="home">
        <Logo className={styles.logo} />
        <p>
          Our company is a leading provider of digital services. We specialize
          in developing innovative solutions that help businesses streamline
          their operations and improve their bottom line. Our team of experts
          has years of experience in the technology industry, and we are
          dedicated to staying on the cutting edge of new developments and
          trends.
        </p>
        <img
            src={service1Image}
            alt="Automation platform"
            className={styles.serviceImage}
        />
      </section>

      <About />
      <Services />
    </>
  );
};
