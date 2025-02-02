"use client";

import React, { useEffect, useState, useRef } from "react";

const Chatbot = () => {
  const [isInDOM, setIsInDOM] = useState(false);
  const chatbotHeight = "450px";
  const chatbotWidth = "320px";
  useEffect(() => {
    try {
      const config = { attributes: true, childList: true, subtree: true };
      const iframe = document.getElementById("chatbot-iframe"); // change to correctly select your iframe
      const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      const secondDiv = innerDoc.body.getElementsByTagName("div")[1];
      const nestedDiv = secondDiv.getElementsByTagName("div")[0]; // Adjust the index as needed

      if (nestedDiv.className.includes("hidden")) {
        document.getElementById("chatbot-iframe").style["width"] = "77px";
        document.getElementById("chatbot-iframe").style["height"] = "77px";
      } else {
        document.getElementById("chatbot-iframe").style["width"] =
          parseInt(chatbotWidth.replace(/px/, "")) + 30 + "px";
        document.getElementById("chatbot-iframe").style["height"] =
          parseInt(chatbotHeight.replace(/px/, "")) + 30 + "px";
      }
      // Callback function to execute when mutations are observed
      const callback = (mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.type === "attributes") {
            if (nestedDiv.className.includes("hidden")) {
              document.getElementById("chatbot-iframe").style["width"] = "77px";
              document.getElementById("chatbot-iframe").style["height"] =
                "77px";
            } else {
              document.getElementById("chatbot-iframe").style["width"] =
                parseInt(chatbotWidth.replace(/px/, "")) + 30 + "px";
              document.getElementById("chatbot-iframe").style["height"] =
                parseInt(chatbotHeight.replace(/px/, "")) + 30 + "px";
            }
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(nestedDiv, config);
    } catch (err) {
      console.log(err);
    }
  }, []);

  //document.contains(document.getElementById('anything-llm-embed-chat-container'))
  return (
    <iframe
      id="chatbot-iframe"
      style={{
        position: "fixed",
        bottom: "5px",
        right: "10px",
        height: "480px",
        width: "350px",
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
        
      
        data-embed-id="107e568a-e7bf-4a8b-a400-4411fe5cd743"
        data-base-api-url="to be replaced with url of hosted anythingllm instance"
        src="anythingllm-chat-widget.min.js"
        data-chat-icon="chatBubble"
        data-user-bg-color="#d3d3d3"
        data-assistant-bg-color="#FBE4E4"
        data-greeting ='Ask Away!'
        data-assistant-name="Prudential Assistant"
        data-no-sponsor="true"
        data-brand-image-url="prudentialLogoOutline.png"
        data-assistant-icon="chatbotGirl.png"
        data-support-email="customer.service@prudential.com.sg"
        data-window-height=${chatbotHeight}
        data-window-width=${chatbotWidth}
      ></script>    </body>
        </html>
      `}
    />
  );
};

export default Chatbot;
