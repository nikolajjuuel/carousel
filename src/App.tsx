import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import aws from "./assets/aws.svg";
import c_sharp from "./assets/c_sharp.svg";
import css from "./assets/css.svg";
import cypress from "./assets/cypress.svg";
import express_js from "./assets/express_js.svg";
import github from "./assets/github.svg";
import html from "./assets/html.svg";
import java_script from "./assets/java_script.svg";
import jest from "./assets/jest.svg";
import mocha from "./assets/mocha.svg";
import mui from "./assets/mui.svg";
import next_js from "./assets/next_js.svg";
import postgre_sql from "./assets/postgre_sql.svg";
import react_js from "./assets/react_js.svg";
import ruby from "./assets/ruby.svg";
import sass from "./assets/scss.svg";
import storybook from "./assets/storybook.svg";
import twilio from "./assets/twilio.svg";
import typescript from "./assets/type_script.svg";
import vercel from "./assets/vercel.svg";
import vitest from "./assets/vitest.svg";
import "./App.css";

function App() {
  const progress = useRef(0);
  const speed = useRef(0.4);
  const logosRef = useRef<HTMLDivElement>(null);
  const logoWidthRef = useRef<HTMLDivElement>(null);
  const direction = useRef(0);

  const [style, setStyle] = useState({});

  const movement = () => {
    //determine direction
    if (direction.current === 0) {
      // moves to the left
      progress.current -= speed.current;
    } else {
      // moves to the right
      progress.current += speed.current;
    }

    if (logosRef.current && logoWidthRef.current && direction.current === 0) {
      let rightEdge = logosRef.current.getBoundingClientRect().right;
      let lastLogoRightEdge =
        logoWidthRef.current.getBoundingClientRect().right;

      if (rightEdge > lastLogoRightEdge && direction.current === 0) {
        console.log("right edge", rightEdge);
        console.log("last logo right edge", lastLogoRightEdge);
        direction.current = 1;
      }
    }

    if (direction.current === 1 && progress.current >= 0) {
      direction.current = 0;
    }

    setStyle({
      transform: `translateX(${progress.current}px)`,
    });
    requestAnimationFrame(movement);
  };

  useEffect(() => {
    movement();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div
        onClick={() => {
          if (logoWidthRef.current) {
            console.log(logoWidthRef.current.getBoundingClientRect());
          }
        }}
      >
        GET BINDING INFO
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <div
            className="directions"
            onMouseEnter={() => (direction.current = 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div
            className="slow"
            onMouseEnter={() => (speed.current = 0.2)}
            onMouseLeave={() => (speed.current = 0.4)}
            ref={logosRef}
          >
            <div className="logos" style={style}>
              <img
                src={aws}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="AWS logo"
              />
              <img
                src={c_sharp}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="C# logo"
              />
              <img
                src={css}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="CSS logo"
              />
              <img
                src={cypress}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Cypress logo"
              />
              <img
                src={express_js}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Express logo"
              />
              <img
                src={github}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Github logo"
              />
              <img
                src={html}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="HTML5 logo"
              />
              <img
                src={java_script}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="JavaScript logo"
              />
              <img
                src={jest}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Jest logo"
              />
              <img
                src={mocha}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Mocha logo"
              />
              <img
                src={mui}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="MUI logo"
              />
              <img
                src={next_js}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Next JS logo"
              />
              <img
                src={postgre_sql}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="PostgreSQL logo"
              />
              <img
                src={react_js}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="React logo"
              />
              <img
                src={ruby}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Ruby logo"
              />
              <img
                src={sass}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="SASS logo"
              />
              <img
                src={storybook}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Storybook logo"
              />
              <img
                src={typescript}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="TypeScript logo"
              />
              <img
                src={vercel}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.4)}
                alt="Vercel logo"
              />
              <img
                ref={logoWidthRef}
                src={vitest}
                className="logo"
                alt="Vitest logo"
              />

              {/* REPEATS */}

              {/* <img src={aws} className="logo " alt="AWS logo" />
              <img src={c_sharp} className="logo " alt="C# logo" />
              <img src={css} className="logo" alt="CSS logo" />
              <img src={cypress} className="logo" alt="Cypress logo" />
              <img src={express_js} className="logo" alt="Express logo" />
              <img src={github} className="logo" alt="Github logo" />
              <img src={html} className="logo" alt="HTML5 logo" />
              <img src={java_script} className="logo" alt="JavaScript logo" />
              <img src={jest} className="logo" alt="Jest logo" />
              <img src={mocha} className="logo" alt="Mocha logo" />
              <img src={mui} className="logo" alt="MUI logo" />
              <img src={next_js} className="logo" alt="Next JS logo" />
              <img src={postgre_sql} className="logo" alt="PostgreSQL logo" />
              <img src={react_js} className="logo" alt="React logo" />
              <img src={ruby} className="logo" alt="Ruby logo" />
              <img src={sass} className="logo" alt="SASS logo" />
              <img src={storybook} className="logo" alt="Storybook logo" />
              <img src={typescript} className="logo" alt="TypeScript logo" />
              <img src={vercel} className="logo" alt="Vercel logo" />
              <img src={vitest} className="logo" alt="Vitest logo" /> */}
            </div>
          </div>

          <div
            className="directions"
            onMouseEnter={() => (direction.current = 0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
