import React from "react";
import { Product } from "./Product";
import imagePq from "../../image/burger02.png";
import imageMd from "../../image/burger.png";
import imageGr from "../../image/burger03.png";
import {NavBarAdmin } from "./NavBarAdmin"
//Simulando la data que se obtendría en la base de datos
const product = [
  {
    id: 1,
    title: "Hamburguesa pequeña",
    image: imagePq,
  },
  {
    id: 2,
    title: "Hamburguesa mediana",
    image: imageMd,
  },
  {
    id: 3,
    title: "Hamburguesa grande",
    image: imageGr,
  },
];
export const ProductAdmin = () => {

  return (
    <>
      <section>
        <NavBarAdmin />
      </section>
      <section className="container d-flex justify-content-center">
        <div className="row">
          {product.map((item) => (
            <div className="col-md-4" Key={item.id}>
              <Product title={item.title} image={item.image} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
