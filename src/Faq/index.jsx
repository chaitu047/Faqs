import { useState } from "react";

export default function Faq(faq) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="faq-item">
      <div>
        <div>{faq.faq.question}</div>
        {expand && <div>{faq.faq.answer}</div>}
      </div>
      <div onClick={() => setExpand((prev) => !prev)}>{expand ? "-" : "+"}</div>
    </div>
  );
}
