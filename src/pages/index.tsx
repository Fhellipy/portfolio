import type { NextPage } from "next";

import { Header } from "../components/Header";
import { HomePage } from "../components/HomePage";
import { DefaultTemplate } from "../templates/Default";

const Home: NextPage = () => {
  return (
    <DefaultTemplate>
      <Header />
      <HomePage />
    </DefaultTemplate>
  );
};

export default Home;
