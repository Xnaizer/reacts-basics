import AccordionItem from "./AccordionItem";
import { useState } from "react";
function Accordion({ dfaqs }) {
    const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <div className="w-[700px] mx-auto mt-[100px] flex flex-col gap-6">
        {dfaqs.map((dfaq, index) => (
          // <p className="text-2xl font-medium" >{dfaqs.question}</p>
          <AccordionItem
            key={index}
            number={index + 1}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
            question={dfaq.question}
            answer={dfaq.answer}
          />
        ))}
      </div>
    </>
  );
}

export default Accordion;
