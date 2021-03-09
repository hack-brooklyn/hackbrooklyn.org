import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import styles from "../styles/scss/FAQ.module.scss";
import FAQData from "../data/FAQ";

function FaqQuestion(props) {
  const {
    faqItem: { Question, Answer }
  } = props;
  return (
    <div className={styles.faq_q_and_a}>
      <h3 className={styles.faq_question}>{Question}</h3>
      <p className={styles.faq_answer}>{Answer}</p>
    </div>
  );
}

function FAQ() {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);
  const data = [
    FAQData[0],
    FAQData[1],
    FAQData[2],
    FAQData[3],
    FAQData[4],
    FAQData[5]
  ];

  return (
    <Row id="faq" className={styles.faq}>
      <h2 className={styles.faq_title}>Frequently Asked Questions</h2>
      <div className="row">
        {data.map(faq => (
          <div className={width < 600 ? "col-12" : "col-md-6"}>
            <FaqQuestion faqItem={faq} />
          </div>
        ))}
      </div>
    </Row>
  );
}

export default FAQ;
