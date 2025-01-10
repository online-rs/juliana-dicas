import React from "react";
import LinkCard from "./LinkCard";

const LinkList = () => {
  const links = [
    {
      title: "Echo Show 5 (3ª geração - 2023)",
      description: "Smart display com Alexa, graves 2x mais potentes e som mais nítido | Cor Preta.",
      price: "R$ 699,00",
      image: "https://m.media-amazon.com/images/I/81R7B3TwIBL._AC_SX679_.jpg",
      url: "https://amzn.to/40mY0Y9",
    },
    {
      title: "Produto 2",
      description: "Este é o segundo produto.",
      price: "R$ 299,99",
      image: "https://via.placeholder.com/300x200?text=Produto+2",
      url: "https://link-associado-2.com",
    },
    {
      title: "Produto 3",
      description: "Este é o terceiro produto.",
      price: "R$ 399,99",
      image: "https://via.placeholder.com/300x200?text=Produto+3",
      url: "https://link-associado-3.com",
    },
    // Adicione mais produtos aqui
  ];

  return (
    <div style={styles.container}>
      {links.map((link, index) => (
        <LinkCard
          key={index}
          title={link.title}
          description={link.description}
          price={link.price}
          image={link.image}
          url={link.url}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    padding: "16px",
  },
};

export default LinkList;
