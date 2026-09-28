import React from "react";
import "./Clients.css";

const topClients = [
  {
    name: "CLIENT 01",
    image: "/images/client-01.png",
  },
  {
    name: "CLIENT 02",
    image: "/images/client-02.png",
  },
  {
    name: "CLIENT 03",
    image: "/images/client-03.png",
  },
  {
    name: "CLIENT 04",
    image: "/images/client-04.png",
  },
  {
    name: "CLIENT 05",
    image: "/images/client-05.png",
  },
  {
    name: "CLIENT 06",
    image: "/images/client-06.png",
  },
];

const bottomClients = [
  {
    name: "CLIENT 07",
    image: "/images/client-07.png",
  },
  {
    name: "CLIENT 08",
    image: "/images/client-08.png",
  },
  {
    name: "CLIENT 09",
    image: "/images/client-09.png",
  },
  {
    name: "CLIENT 10",
    image: "/images/client-10.png",
  },
  {
    name: "CLIENT 11",
    image: "/images/client-11.png",
  },
  {
    name: "CLIENT 12",
    image: "/images/client-12.png",
  },
];

const ClientLogo = ({ client }) => {
  return (
    <div className="client-logo">
      <img src={client.image} alt={client.name} />
    </div>
  );
};

const Clients = () => {
  return (
    <section className="safi-clients" id="clients">

      <div className="clients-container">

        {/* HEADER */}
        <div className="clients-header">

          <div className="clients-label">
            <span>GLOBAL RELATIONSHIPS</span>
            <div></div>
            <span>06</span>
          </div>

          <div className="clients-heading">
            <div>
              <p>STRATEGIC ALLIANCES</p>

              <h2>
                Trusted
                <br />
                <em>relationships.</em>
              </h2>
            </div>

            <p className="clients-intro">
              We take pride in collaborating with industry leaders and trusted
              partners who share our commitment to excellence and innovation.
            </p>
          </div>

        </div>

      </div>

      {/* MOVING LOGO ROWS */}
      <div className="clients-marquee">

        {/* TOP — MOVES RIGHT */}
        <div className="marquee-row marquee-right">
          <div className="marquee-track">

            {[
              ...topClients,
              ...topClients,
              ...topClients,
            ].map((client, index) => (
              <ClientLogo
                key={`top-${client.name}-${index}`}
                client={client}
              />
            ))}

          </div>
        </div>

        {/* BOTTOM — MOVES LEFT */}
        <div className="marquee-row marquee-left">
          <div className="marquee-track">

            {[
              ...bottomClients,
              ...bottomClients,
              ...bottomClients,
            ].map((client, index) => (
              <ClientLogo
                key={`bottom-${client.name}-${index}`}
                client={client}
              />
            ))}

          </div>
        </div>

      </div>

      {/* BOTTOM STATEMENT */}
      <div className="clients-bottom">

        <span className="clients-bottom-line"></span>

        <p>
          Here are some of the clients we've had the privilege to work with.
        </p>

      </div>

    </section>
  );
};

export default Clients;