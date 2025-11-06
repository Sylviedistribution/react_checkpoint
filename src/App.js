import "./App.css";
import { Card, Navbar, Nav, Container } from "react-bootstrap";

var firstname = "Sylvestre";

function App() {
  return (
    <>
      {/* === NAVBAR === */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm px-4 py-3">
        <Container>
          <Navbar.Brand href="#home">Pokédex 🔥</Navbar.Brand>

          {/* --- bouton hamburger --- */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* --- contenu du menu (masqué sur mobile, affiché sur grands écrans) --- */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="active" href="#home">Home</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center ms-3">
              <p className="text-white mb-0 me-3">{firstname || "Guest"}</p>
              <img
                src={
                  firstname
                    ? "/img/avatar.png"
                    : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt="avatar"
                width="45"
                height="45"
                className="rounded-circle border border-light"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* === HEADING === */}
      <div className="text-center mt-5">
        <h1 className="fw-bold text-danger">🔥 Pokémon Type Feu 🔥</h1>
        <p className="text-muted">
          The mightiest Fire-type Pokémon gathered together!
        </p>
      </div>

      {/* === CARDS === */}
      <div className="d-flex justify-content-center mt-5 gap-5 flex-wrap">
        <Card className="card">
          <Card.Img variant="top" src="/img/sulfura.gif" className="card-img" />
          <Card.Title className="text-center mt-2">Sulfura</Card.Title>
        </Card>

        <Card className="card">
          <Card.Img variant="top" src="/img/dracofeu.gif" className="card-img" />
          <Card.Title className="text-center mt-2">Dracofeu</Card.Title>
        </Card>

        <Card className="card">
          <Card.Img variant="top" src="/img/simiabraz.gif" className="card-img" />
          <Card.Title className="text-center mt-2">Simiabraz</Card.Title>
        </Card>
      </div>

      {/* === FOOTER === */}
      <footer className="bg-dark text-light text-center py-2 mt-3">
        <Navbar className="justify-content-center bg-dark">
          <p className="mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </Navbar>
      </footer>
    </>
  );
}

export default App;
