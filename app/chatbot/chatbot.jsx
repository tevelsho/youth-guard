"use client";

import React, { useEffect } from "react";

const Chatbot = () => {
  return (
    <iframe
      id="chatbot-iframe"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "500px",
        height: "650px",
        border: "none",
        zIndex: 1000,
      }}
      srcDoc={`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        body { margin: 0; overflow: hidden; }
      </style>
    </head>
    <body>
      <div id="custom-chat-widget"></div>
  <script
    data-embed-id="fbaf448a-03fa-4a10-9555-7e5cd8667675"
    data-base-api-url="http://localhost:3001/api/embed"
    src="anythingllm-chat-widget.min.js"
    data-chat-icon="support"
    data-user-bg-color="#F11834"
    data-assistant-bg-color="#FBE4E4"
    data-greeting ='Hello, feel free to ask anything about Prudential products and services. I am here to help you with recommendations, comparisons, FAQs and more!'
    data-assistant-name="Prudential Assistant"
    data-no-sponsor="true"
    data-brand-image-url="prudentialLogoOutline.png"
    data-assistant-icon="prudentialLogo.png"
    data-support-email="customer.service@prudential.com.sg"
    data-window-height="600px"
    data-window-width="400px"
  ></script>    </body>
    </html>
  `}

      // Use the imported srcDoc content
    />
  );
};

export default Chatbot;
