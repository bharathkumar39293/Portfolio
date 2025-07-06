import React from "react";
import { Container, Row,} from "react-bootstrap";

function ResumeNew() {
  const resumeLink = "/bharath_resume.pdf"; // File must be in /public folder

  return (
    <Container fluid className="resume-section" style={{ padding: 0 }}>

      <Row className="justify-content-center">
        <iframe
          src={resumeLink}
          style={{
            width: "100vw",
            height: "100vh",
            border: "none",
          }}
          title="Resume PDF"
        />
      </Row>
    </Container>
  );
}

export default ResumeNew;
