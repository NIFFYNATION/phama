import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import style from "./Counter.module.css";
import CountUp from "react-countup";


function Counter() {
  const [countOn, setCounterOn] = useState(false);
  return (
    <div className={`contain mt-[120px] pb-[60px]`}>
      <div className={``}>
        <div
          className={`grid md:grid-cols-3 lg:grid-cols-5 gap-3 text-secondary03 p-4 border-t-[1px] border-[#2B78CA] text-center`}
        >
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="font-semibold text-[50px] mb-3">
                {countOn && (
                  <CountUp start={0} end={25} duration={2} delay={0} />
                )}
              </h2>
            </ScrollTrigger>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Years
            </p>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Experience
            </p>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="font-semibold text-[50px] mb-3">
                {countOn && (
                  <CountUp start={0} end={893} duration={1} delay={0} />
                )}
              </h2>
            </ScrollTrigger>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Medicament
            </p>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Invented
            </p>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="font-semibold text-[50px] mb-3">
                {countOn && (
                  <CountUp start={0} end={`75`} duration={1} delay={0} />
                )}
              </h2>
            </ScrollTrigger>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Awards
            </p>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Winned
            </p>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="font-semibold text-[50px] mb-3">
                {countOn && (
                  <CountUp
                    start={0}
                    end={673}
                    suffix={" k"}
                    duration={1}
                    delay={0}
                  />
                )}
              </h2>
            </ScrollTrigger>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Happy
            </p>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Clients
            </p>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h2 className="font-semibold text-[50px] mb-3">
                {countOn && (
                  <CountUp start={0} end={751} duration={1} delay={0} />
                )}
              </h2>
            </ScrollTrigger>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Pharmacies
            </p>
            <p
              className={
                `text-[14px] ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2 ` +
                style.p
              }
            >
              Partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;