"use client";

import React, { useEffect } from "react";

const Chatbot = () => {
  return (
    <iframe
      id="chatbot-iframe"
      style={{
        position: "fixed",
        bottom: "5px", 
        right: "10px",
        width: "500px",
        height: "600px",
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
    data-user-bg-color="#d3d3d3"
    data-assistant-bg-color="#FBE4E4"
    data-greeting ='Ask Away!'
    data-assistant-name="Prudential Assistant"
    data-no-sponsor="true"
    data-brand-image-url="prudentialLogoOutline.png"
    data-assistant-icon="chatbotGirl.png"
    data-support-email="customer.service@prudential.com.sg"
    data-window-height="450px"
    data-window-width="320px"
  ></script>    </body>
    </html>
  `}

      // Use the imported srcDoc content
    />
  );
};

export default Chatbot;
