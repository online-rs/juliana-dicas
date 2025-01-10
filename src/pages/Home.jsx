import React from "react";
import LinkList from "../components/LinkList";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Indicações da JUliana</h1>
      <LinkList />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
};

export default Home;
