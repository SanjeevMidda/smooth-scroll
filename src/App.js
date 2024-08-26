import "./index.css";
import imageOne from "./assets/imgs/annie-spratt-ahmZpaR4N4A-unsplash.jpg";
import imageTwo from "./assets/imgs/comet-cat-2uQ0G0gKVQ8-unsplash.jpg";
import imageThree from "./assets/imgs/daniel-sessler-0MjapO_5WP0-unsplash.jpg";
import imageFour from "./assets/imgs/harry-borrett-cOt5ClYWNIQ-unsplash.jpg";
import imageFive from "./assets/imgs/polina-kuzovkova-IuuqE8mGQiw-unsplash.jpg";
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const lenis = useLenis(({ scroll }) => {});
  let heading = useRef();

  let sectionTwo = useRef();
  let sectionThree = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "300px",
        end: "+=600px",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .from(sectionTwo.current, { clipPath: "inset(30%)", opacity: 1 })
      .to(sectionTwo.current, { height: "100%", opacity: 1 }, 0);
  }, []);

  useGSAP(() => {
    gsap.to("#title", { x: 100 });
  }, {});
  return (
    <ReactLenis root>
      <div className="App">
        <div className="imgContainer">
          <h2>hello.</h2>
          <img src={imageOne} alt="" id="one" />
          <img src={imageTwo} alt="" id="two" />
          <img src={imageThree} alt="" id="three" />
          <img src={imageFour} alt="" id="four" />
          <img src={imageFive} alt="" id="five" />
        </div>

        <section id="sectionTwo" ref={sectionTwo}>
          <div className="circle"></div>
        </section>

        <section id="sectionThree" ref={sectionThree}>
          <h1>R</h1>
          <h1 ref={heading} id="title">
            G
          </h1>
          <h1>B</h1>
        </section>

        <section id="sectionFour">
          <h1>🌎</h1>
        </section>

        <section id="sectionFive">
          <header>
            <div className="links">
              <h3>works</h3>
              <h3>exhibition</h3>
              <h3>location</h3>
            </div>
          </header>
          <h2>WELCOME /</h2>
        </section>
      </div>
    </ReactLenis>
  );
}

export default App;
