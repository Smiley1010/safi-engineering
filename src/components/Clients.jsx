import React from "react";
import "./Clients.css";

const topClients = [
  {
    name: "PARTNER 01",
    image: "/images/client1.png",
  },
  {
    name: "PARTNER 02",
    image: "/images/client2.png",
  },
  {
    name: "PARTNER 03",
    image: "/images/client3.jpg",
  },
  {
    name: "PARTNER 04",
    image: "/images/client4.png",
  },
  {
    name: "PARTNER 05",
    image: "/images/client5.jpg",
  },
  {
    name: "PARTNER 06",
    image: "/images/client6.jpg",
  },
  {
    name: "PARTNER 07",
    image: "/images/client7.png",
  },
  {
    name: "PARTNER 08",
    image: "/images/client8.png",
  },
  {
    name: "PARTNER 09",
    image: "/images/client9.png",
  },
];

const bottomClients = [
  {
    name: "CLIENT 01",
    image: "/images/client7.png",
  },
  {
    name: "CLIENT 02",
    image: "/images/client01.jpg",
  },
  {
    name: "CLIENT 03",
    image: "/images/client8.png",
  },
  {
    name: "CLIENT 04",
    image: "/images/client02.png",
  },
  {
    name: "CLIENT 05",
    image: "/images/client03.jpg",
  },
  {
    name: "CLIENT 06",
    image: "/images/client04.png",
  },
  {
    name: "CLIENT 07",
    image: "/images/client05.jpg",
  },
  {
    name: "CLIENT 08",
    image: "/images/client06.png",
  },
  {
    name: "CLIENT 09",
    image: "/images/client9.png",
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

      {/* =====================================================
          PROFESSIONAL PARTNERS & AFFILIATES
      ===================================================== */}

      <div className="clients-group">

        <div className="clients-group-header">
          <span>PROFESSIONAL PARTNERS & AFFILIATES</span>
        </div>

        <div className="clients-marquee">

          <div className="marquee-row marquee-right">

            <div className="marquee-track">

              {[...topClients, ...topClients, ...topClients].map(
                (client, index) => (
                  <ClientLogo
                    key={`top-${client.name}-${index}`}
                    client={client}
                  />
                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CLIENTS WE'VE WORKED WITH
      ===================================================== */}

      <div className="clients-group clients-group-bottom">

        <div className="clients-group-header">
          <span>CLIENTS WE'VE WORKED WITH</span>
        </div>

        <div className="clients-marquee">

          <div className="marquee-row marquee-left">

            <div className="marquee-track">

              {[...bottomClients, ...bottomClients, ...bottomClients].map(
                (client, index) => (
                  <ClientLogo
                    key={`bottom-${client.name}-${index}`}
                    client={client}
                  />
                )
              )}

            </div>

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