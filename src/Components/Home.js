import { CardComponent } from "./Card";
import { Footer } from "./Footer";
import { Row, Container, Col } from "react-bootstrap";
import page1img from "../assets/page1-img.png";
import page2img from "../assets/page2-img.png";
import page3img from "../assets/page3-img.png";

export const Home = () => {
  return (
    <>
      <Container>
        <h1 className="header">Welcome</h1>
        <i className="intro">
          Όλα τα project έχουν ως γνώμονα και βάση τον άνθρωπο με μία
          κυριολεκτική αλλά και αλληγορική έννοια.
        </i>
        <Row xs={10} md={12} className="g-12 mt-5">
          <Col>
            <CardComponent
              title={"Stars"}
              text={`Πάντα ακούμε
            ψηλά το κεφάλι και να μην τα παρατάς. Σηκώνοντας το κεφάλι σου βλέπεις το
            απέραντο, το άπειρο. Και εσύ στη μέση. Όλα γυρίζουν γύρω από εσένα. Ή και
            όχι…`}
              link={"/page1"}
              img={page1img}
            />
            <CardComponent
              title={"Snowflakes"}
              text={`Κίνηση και
            διάδραση. Όλη η ζωή μας. Κατακλυσμός γεγονότων και πληροφοριών σαν
            χιονοστιβάδα. Όμως εσύ επιλέγεις τελικά που θα σταθείς. Και με τι θα
            ασχοληθείς.`}
              link={"/page2"}
              img={page2img}
            />
            <CardComponent
              title={"The cube"}
              text={`Η
            λογική είναι το παν στη ζωή του ανθρώπου. Ίσως η τετράγωνη λογική. Ίσως
            και όχι. Η οποία πολλές φορές συνοδεύεται με ηχηρά μηνύματα
            προειδοποίησης του εγκεφάλου μας.`}
              link={"/page3"}
              img={page3img}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
