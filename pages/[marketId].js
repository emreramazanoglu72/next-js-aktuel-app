import React from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import MarketCard from "../components/marketCard";
import { getMarketsDetail } from "../Service";

const MarketDetail = (props) => {
  return (
    <>
      <Header title={props?.resultSet[0]?.market} />
      <Container>
        <div class="row">
          {props?.resultSet.map((item) => (
            <MarketCard
              title={item.title}
              image={item.image}
              id={item.id}
              market={item.market}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

MarketDetail.getInitialProps = async (ctx) => {
  const { marketId } = ctx.query;
  return await getMarketsDetail(marketId);
};

export default MarketDetail;
