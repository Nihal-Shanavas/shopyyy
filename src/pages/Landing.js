import React, { useEffect, useState } from "react";
import "./Landing.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Landing() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsFound, setProductsFound] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProducts(data);
      setProductsFound(true);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setProductsFound(false);
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="landing-container">
      <Container>
        <section>
          <div className="hero">
            <Row>
              <Col>
                <div className="column">
                  <p className="p-0">Discover Your Perfect Style</p>
                  <p> Select, Savor, Shine!</p>
                  <div className="btn-shw">
                    <ScrollLink
                      to="page2"
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      <Button className="view-products-btn btn btn-secondary mt-3 btn">
                        <span>View Products</span>
                      </Button>
                    </ScrollLink>
                  </div>
                </div>
                <div></div>

                <div className="title-hidden mt-5">
                  <p>
                    Discover Your <br /> Perfect Style
                  </p>
                  <p>
                    {" "}
                    Select, Savor,
                    <br /> Shine!
                  </p>
                  <ScrollLink
                    to="page2"
                    smooth={true}
                    duration={500}
                    offset={-80}
                  >
                    <Button className="view-products-btn btn btn-secondary mt-3 btn">
                      <span>View Products</span>
                    </Button>
                  </ScrollLink>
                </div>
              </Col>
              <Col>
                <img
                  className="mobileImg"
                  src="https://i.postimg.cc/prsD9BGs/unveiling-layers-webshop-development-exposing-components-pristine-white-canvas-free-from-s-983420-16.jpg"
                  alt=""
                />
                <img
                  className="first"
                  src="https://i.postimg.cc/m2R5qt9h/pink-sweater-front.jpg"
                  alt=""
                />
                <img
                  className="second"
                  src="https://i.postimg.cc/sDgH4bSN/hand-holding-light-brown-beige-pants-Photo-Room-png-Photo-Room.png"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </section>

        <section style={{ marginTop: "100px" }} id="page2">
          <h1
            className="mt-5"
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginTop: "100px",
            }}
          >
            Products
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div className="inputBox_container mt-2">
              <svg
                className="search_icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                alt="search icon"
              >
                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
              </svg>
              <input
                className="inputBox"
                id="inputBox"
                type="text"
                placeholder="Search By Category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress sx={{ color: "grey" }} />
            </Box>
          ) : error ? (
            <div
              style={{ textAlign: "center", color: "red", marginTop: "20px" }}
            >
              {error}
            </div>
          ) : filteredProducts.length > 0 ? (
            <Row>
              {filteredProducts.map((product) => (
                <Col className="mb-4" key={product.id}>
                  <div className="card">
                    <div className="image-container">
                      <div className="product-label">{product.category}</div>
                      <img title={product.title} src={product.image} alt="" />
                    </div>

                    <div className="content">
                      <div className="product-name">
                        {product.title.length > 28
                          ? product.title.slice(0, 28) + "..."
                          : product.title}
                      </div>
                      <div className="rating">
                        <Rating
                          name="half-rating-read"
                          defaultValue={product.rating.rate}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <p>({product.rating.count})</p>
                      </div>
                      <div className="brand">${product.price}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="">
              <p style={{ fontSize: "2rem" }} className="text-danger ">
                Category Not Found !!
              </p>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}

export default Landing;
