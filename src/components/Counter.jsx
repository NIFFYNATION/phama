import { useState, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
import style from "./Counter.module.css";
import CountUp from "react-countup";

function Counter() {
  const [countOn, setCounterOn] = useState(false);
  const triggerRef = useRef(null);

  const CounterItem = ({ end, suffix = "", label1, label2 }) => (
    <div>
      <div ref={triggerRef}>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <h2 className="font-semibold text-[50px] mb-3">
            {countOn && <CountUp start={0} end={end} suffix={suffix} duration={2} delay={0} />}
          </h2>
        </ScrollTrigger>
      </div>
      <p className="text-[14px] tracking-[3px] font-lato ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2">
        {label1}
      </p>
      <p className="text-[14px] tracking-[3px] font-lato ring-1 ring-[#2B78CA] max-w-[max-content] ml-auto mr-auto px-2">
        {label2}
      </p>
    </div>
  );

  return (
    <div className="contain mt-[120px] pb-[60px]">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 text-secondary03 p-4 border-t-[1px] border-[#2B78CA] text-center">
        <CounterItem end={25} label1="YEARS" label2="EXPERIENCE" />
        <CounterItem end={893} label1="MEDICAMENT" label2="INVENTED" />
        <CounterItem end={75} label1="AWARDS" label2="WINNED" />
        <CounterItem end={673} suffix="k" label1="HAPPY" label2="CLIENTS" />
        <CounterItem end={751} label1="PHARMACIES" label2="PARTNERS" />
      </div>
    </div>
  );
}

export default Counter;