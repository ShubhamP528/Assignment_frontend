import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuthContext } from "../GlobleContext/AuthContext";
import { useLogout } from "../hooks/useLogout";

function Navi() {
  const { puser } = useAuthContext();
  const { logout } = useLogout();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Product List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {puser ? <Nav.Link href="/newProduct">Add Product</Nav.Link> : ""}
          </Nav>
          {puser ? (
            <div className="flex gap-5">
              <Navbar.Text>
                Signed in as: <a href="#login">{puser.username}</a>
              </Navbar.Text>
              <Nav.Item
                className="flex items-center justify-center"
                onClick={logout}
              >
                <Nav.Link>Logout</Nav.Link>
              </Nav.Item>
            </div>
          ) : (
            <div className="flex gap-5">
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signUp">signup</Nav.Link>
              </Nav.Item>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">ProductCard</Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       {/* <div className="flex gap-5">
    //         <Nav.Item>
    //           <Nav.Link href="/">Home</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/newProduct">Add Product</Nav.Link>
    //         </Nav.Item>
    //       </div> */}

    //       {puser ? (
    //         <div className="flex gap-5">
    //           <Navbar.Text>
    //             Signed in as: <a href="#login">Mark Otto</a>
    //           </Navbar.Text>
    //           <Nav.Item
    //             className="flex items-center justify-center"
    //             onClick={logout}
    //           >
    //             <Nav.Link>Logout</Nav.Link>
    //           </Nav.Item>
    //         </div>
    //       ) : (
    //         <div className="flex gap-5">
    //           <Nav.Item>
    //             <Nav.Link href="/login">Login</Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link href="/signUp">signup</Nav.Link>
    //           </Nav.Item>
    //         </div>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Navi;
