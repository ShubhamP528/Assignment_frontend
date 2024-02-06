import React from "react";
import Product from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../GlobleContext/AuthContext";
import Navi from "../components/Navbar";

function Home() {
  const { puser } = useAuthContext();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchProduct = async () => {
      const response = await axios.get("/products", {
        headers: {
          Authorization: `Bearer ${puser.token}`,
        },
      });
      console.log(response.data);
      setProduct([...response.data.response]);
    };
    if (puser) {
      fatchProduct();
    }
  }, [puser]);
  return (
    <>
      <Navi />
      <div className=" flex justify-evenly flex-wrap">
        {product.map((item) => {
          return <Product key={item._id} product={item} />;
        })}
      </div>
    </>
  );
}

export default Home;
