import React from "react";
import footerData from "../Utilities/footer"; 

function Footer() {
  return (
    <footer
      id="contact"
      className="w-screen h-[90vh] lg:h-[70vh] flex items-center justify-center text-black overflow-hidden"
    >
      <div
        id="centeredDiv"
        className="w-full h-full flex flex-col items-center justify-between"
      >
        <IntegratedLocation />
        <div
          id="footerContainer"
          className="w-full h-[70%] lg:h-[60%] bg-cstm rounded-t-3xl flex flex-col items-center justify-evenly text-white/95"
        >
          <div
            id="centeredFooterContainer"
            className="w-[95%] h-[80%] lg:h-[70%] flex flex-col lg:flex-row items-center justify-around lg:justify-between"
          >
            {footerData.map((section, index) => (
              <FooterSection key={index} section={section} />
            ))}
          </div>
          <FooterEnd />
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ section }) {
  return (
    <div
      key={section.id}
      className="h-fit lg:h-full lg:w-[24%] w-full flex flex-col text-sm sm:text-base lg:text-lg"
    >
      {section.title && (
        <h1 className="text-sm sm:text-base lg:text-lg 2xl:text-xl font-medium">
          {section.title}
        </h1>
      )}
      {section.description && (
        <>
          {section.description.map((desc, index) => (
            <h2 key={index} className="opacity-80">
              {desc.subTitle}
            </h2>
          ))}
        </>
      )}
      {section.description && (
        <>
          {section.description.map((desc, index) => (
            <p key={index} className="opacity-60">
              {desc.description}
            </p>
          ))}
        </>
      )}
      {section.links && <FooterLinks links={section.links} />}
      {section.connections && (
        <FooterConnections connections={section.connections} />
      )}
      {section.email && (
        <a
          href={section.email.href}
          className="opacity-60 2xl:text-md decoration-white"
        >
          {section.email.text}
        </a>
      )}
    </div>
  );
}

function FooterLinks({ links }) {
  return (
    <ul>
      {links.map((link, index) => (
        <li
          key={index}
          className="text-xs sm:text-sm lg:text-base 2xl:text-md  opacity-60 cursor-pointer decoration-white"
          onClick={(e) => {
            e.preventDefault();
            const targetLink = document.getElementById(link.toLowerCase());
            if (targetLink) {
              targetLink.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            
          }}
        >
          {link}
        </li>
      ))}
    </ul>
  );
}

function FooterConnections({ connections }) {
  return (
    <div>
      {connections.map((connection, index) =>
        Object.entries(connection).map(([key, value]) => (
          <a
            key={`${index}-${key}`}
            href={value.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 text-base 2xl:text-md decoration-white"
          >
            {value.text} <br />
          </a>
        ))
      )}
    </div>
  );
}

const IntegratedLocation = () => (
  <div
    id="centeredMapDiv"
    className="w-[95%] h-[30%] lg:h-[50%] flex items-center justify-between"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.657601232!2d77.44994567418281!3d23.18269366407901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4329dfca0de9%3A0x4dfd63d2a6f2f8d9!2sEasy%20Self%20Drive%20Car%20Rental!5e0!3m2!1sen!2sin!4v1732606533167!5m2!1sen!2sin"
      className="w-full h-[95%] border-2 border-black/40 rounded-3xl"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

function FooterEnd() {
  return (
    <p className="w-full text-center text-xs sm:text-sm">
      <i className="ri-copyright-line"></i>{new Date().getFullYear()} Goro
      Rental. All rights reserved <br /> Designed & Developed by{" "}
      <span className="decoration text-xs sm:text-base">
        Sushant Dwivedi
      </span>{" "}
      <a
        href="https://www.instagram.com/sushantt.230"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="ri-instagram-line text-base sm:text-lg lg:text-2xl"></i>
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/sushant-dwivedi-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="ri-linkedin-box-fill text-base sm:text-lg lg:text-2xl"></i>
      </a>{" "}
    </p>
  );
}

export default Footer;
