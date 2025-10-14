import { Accordion } from "react-bootstrap";

interface AkpagerAccordionProps {
  event: string;
  active: string;
  onClick: () => void;
  title: string;
  content?: string;
}

const AkpagerAccordion = ({ event, active, onClick, title, content }: AkpagerAccordionProps) => {
  return (
    <Accordion.Item eventKey={event} className="accordion-item">
      <h4 className="accordion-header">
        <Accordion.Button
          className={`accordion-button ${active === event ? "" : "collapsed"}`}
          aria-expanded={active === event ? "true" : "false"}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Button>
      </h4>
      <Accordion.Collapse eventKey={event} className="accordion-collapse">
        <div className="accordion-body">
          <p>
            {content || "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate"}
          </p>
        </div>
      </Accordion.Collapse>
    </Accordion.Item>
  );
};
export default AkpagerAccordion;
