import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs } from "react-icons/si";

const icons = [
  { Icon: CgCPlusPlus, label: "C++" },
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: DiNodejs, label: "Node.js" },
  { Icon: DiReact, label: "React" },
  { Icon: DiMongodb, label: "MongoDB" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: DiGit, label: "Git" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: DiPython, label: "Python" },
];

const Techstack = () => (
  <Row className="justify-content-center pb-5">
    {icons.map(({ Icon, label }, idx) => (
      <Col key={idx} xs={4} md={2} className="tech-icons" title={label}>
        <Icon />
      </Col>
    ))}
  </Row>
);

export default Techstack;
