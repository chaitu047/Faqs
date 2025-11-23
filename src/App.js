import "./styles.css";
import data from "./faqData.json";
import Faq from "./Faq";
export default function App() {
  return (
    <div className="faq-container">
      {data.faqs.map((item, index) => {
        return <Faq key={index} faq={item} />;
      })}
    </div>
  );
}
