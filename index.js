"use strict";

const express = require("express");
const line = require("@line/bot-sdk");
const PORT = process.env.PORT || 3000;

const config = {
  channelAccessToken: "xxxxxxxxxxxxxxxxxxxxxxxxxxxTOKENxxxxx",
  channelSecret: "xxxxxxxxxxSECRETxxxxxxxx",
};

const app = express();
app.post("/webhook", line.middleware(config), (req, res) => {
  console.log(req.body.events);
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

const client = new line.Client(config);

function handleEvent(event) {
  if (event.type === "message") {
    if (event.message.text === "当番発表") {
      var array = [
        [
          {
            type: "flex",
            altText: "Flex Message",
            contents: {
              type: "bubble",
              direction: "ltr",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "とうばんはっぴょう",
                    size: "xl",
                    align: "center",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "xxxxxxxxxxxxxxxxxx",
                size: "full",
                aspectRatio: "1.51:1",
                aspectMode: "fit",
              },
              footer: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "button",
                    action: {
                      type: "postback",
                      label: "おうえんする！",
                      data: "応援",
                    },
                    color: "#F95B5B",
                    style: "primary",
                  },
                ],
              },
            },
          },
        ],
        [
          {
            type: "flex",
            altText: "Flex Message",
            contents: {
              type: "bubble",
              direction: "ltr",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "とうばんはっぴょう",
                    size: "xl",
                    align: "center",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "xxxxxxxxxxxxxxx",
                size: "full",
                aspectRatio: "1.51:1",
                aspectMode: "fit",
              },
              footer: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "button",
                    action: {
                      type: "postback",
                      label: "おうえんする！",
                      data: "応援",
                    },
                    color: "#F95B5B",
                    style: "primary",
                  },
                ],
              },
            },
          },
        ],
        [
          {
            type: "flex",
            altText: "Flex Message",
            contents: {
              type: "bubble",
              direction: "ltr",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "とうばんはっぴょう",
                    size: "xl",
                    align: "center",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "xxxxxxxxxxxxxxxxxx",
                size: "full",
                aspectRatio: "1.51:1",
                aspectMode: "fit",
              },
              footer: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "button",
                    action: {
                      type: "postback",
                      label: "おうえんする！",
                      data: "応援",
                    },
                    color: "#F95B5B",
                    style: "primary",
                  },
                ],
              },
            },
          },
        ],
        [
          {
            type: "flex",
            altText: "Flex Message",
            contents: {
              type: "bubble",
              direction: "ltr",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "とうばんはっぴょう",
                    size: "xl",
                    align: "center",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "xxxxxxxxxxxxxxxxxxxxxxx",
                size: "full",
                aspectRatio: "1.51:1",
                aspectMode: "fit",
              },
              footer: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "button",
                    action: {
                      type: "postback",
                      label: "おうえんする！",
                      data: "応援",
                    },
                    color: "#F95B5B",
                    style: "primary",
                  },
                ],
              },
            },
          },
        ],
        [
          {
            type: "flex",
            altText: "Flex Message",
            contents: {
              type: "bubble",
              direction: "ltr",
              header: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "とうばんはっぴょう",
                    size: "xl",
                    align: "center",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
                size: "full",
                aspectRatio: "1.51:1",
                aspectMode: "fit",
              },
              footer: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "button",
                    action: {
                      type: "postback",
                      label: "おうえんする！",
                      data: "応援",
                    },
                    color: "#F95B5B",
                    style: "primary",
                  },
                ],
              },
            },
          },
        ],
      ];

      return client.replyMessage(
        event.replyToken,
        array[Math.floor(Math.random() * array.length)]
      );
    }
  }

  if (event.postback.data === "応援") {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "応援されました！",
    });
  }
}

process.env.NOW_REGION ? (module.exports = app) : app.listen(PORT);
console.log(`Server running at ${PORT}`);
