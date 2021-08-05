import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import { getDashboardData } from "../Service";
const index = ({ populerMarketler }) => {
  return (
    <>
      <Header />
      <div className="marketsList">
        {populerMarketler?.resultSet?.map((item) => (
          <Link href={item.id}>
            <a href={item.id}>
              <img className="markets-logo" src={item.image} alt={item.title} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

index.getInitialProps = async (ctx) => {
  return await getDashboardData();
};

export default index;
