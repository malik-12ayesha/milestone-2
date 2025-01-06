"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Main = () => {
  const typedElement = useRef(null); // Ref for the target element
  const typedInstance = useRef(null); // Ref to store the Typed instance

  useEffect(() => {
    // Check if the element exists
    if (typedElement.current) {
      // Initialize Typed.js
      typedInstance.current = new Typed(typedElement.current, {
        strings: ["Web Developer", "Graphic Designer.", "UI/UX Designer."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });
    }

    // Cleanup function
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy(); // Destroy only if initialized
        typedInstance.current = null; // Reset the ref
      }
    };
  }, []);

  const handleResumeDownload = () => {
    // Trigger file download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to the resume file
    link.download = "Ayesha_Resume.pdf"; // Suggested file name
    link.click();
  };

  const visitGitHub = () => {
    window.open("https://github.com/your-github-username", "_blank");
  };

  return (
    <main>
      <section className="firstsection">
        <div className="leftsection">
          <div>
            <div>
              Hi, My name is
              <span className="purple">Ayesha.</span>
            </div>
            <div>I am a passionate</div>
          </div>
          <div className="typed-text" ref={typedElement}></div>{" "}
          {/* Target for Typed.js */}
          <div className="buttons">
            <button className="btn" onClick={handleResumeDownload}>
              Download Resume
            </button>
            <button className="btn" onClick={visitGitHub}>
              Visit Github
            </button>
          </div>
        </div>
        <div className="rightsection">
          <Image
            src="/images/female.png"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </section>

      <hr />
      <section className="secondsection">
        <span className="text-gray">What I have done so far</span>
        <h1>Projects</h1>
        <div className="horizontal-line">
          <div className="vertical-line">
            <Image
              className="image-top"
              src="/images/developer1.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <div className="vertical-title">E-Commerce Website</div>
            <div className="vertical-desc">
              Developed a responsive e-commerce website using HTML, CSS, and
              TypeScript, integrated with Next.js for seamless server-side
              rendering and dynamic routing. Utilized Tailwind CSS to design a
              clean, user-friendly, and mobile-responsive interface.
            </div>
          </div>
          <div className="vertical-line">
            <Image
              className="image-top"
              src="/images/developer1.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <div className="vertical-title">E-Commerce Website</div>
            <div className="vertical-desc">
              Developed a responsive e-commerce website using HTML, CSS, and
              TypeScript, integrated with Next.js for seamless server-side
              rendering and dynamic routing. Utilized Tailwind CSS to design a
              clean, user-friendly, and mobile-responsive interface.
            </div>
          </div>
          
          {/* Repeat Work Experience Divs */}
        </div>
      </section>
    </main>
  );
};

export default Main;
