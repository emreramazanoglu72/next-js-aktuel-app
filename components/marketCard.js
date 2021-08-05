import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardTitle, Col } from "reactstrap";
import slugify from "slugify";

const MarketCard = ({ market, id, title, image }) => {
  return (
    <Col sm={4} className="mt-4">
      <Link href={`/market/${slugify(market, "-")}/${id}`}>
        <a href={`/market/${slugify(market, "-")}/${id}`}>
          <Card>
            <CardBody>
              <Image height={500} width={323} src={image} alt="Card image cap" />
              <hr />
              <CardTitle className="text-center mt-2" tag="h6">
                {title}
              </CardTitle>
            </CardBody>
          </Card>
        </a>
      </Link>
    </Col>
  );
};

export default MarketCard;
