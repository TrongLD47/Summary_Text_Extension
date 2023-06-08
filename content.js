const axios = require("axios");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer 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"
  );

  // This part for chat GPT API
  // var raw = JSON.stringify({
  //   "model": "gpt-3.5-turbo",
  //   "messages": [
  //     {
  //       "role": "user",
  //       "content": "Tóm tắt văn bản sau bằng tiếng Việt: " + request.text
  //     }
  //   ]
  // });

  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow'
  // };
  //   fetch("https://api.openai.com/v1/chat/completions", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       const text = result.choices[0].message.content;
  //         console.log(text);
  //         const dialog = document.createElement('div');
  //         dialog.innerHTML = text;
  //         dialog.style.position = 'fixed';
  //         dialog.style.width = '400px';
  //         dialog.style.height = '300px';
  //         dialog.style.top = '50%';
  //         dialog.style.left = '50%';
  //         dialog.style.backgroundColor = 'white';
  //         dialog.style.padding = '10px';
  //         dialog.style.boxShadow = '0 0 10px gray';
  //         dialog.style.zIndex = '9999';
  //         dialog.style.overflowY = 'auto';

  //         const closeBtn = document.createElement('button');
  //         closeBtn.innerHTML = 'Đóng';
  //         closeBtn.addEventListener('click', () => {
  //           document.body.removeChild(dialog);
  //         });
  //         dialog.appendChild(closeBtn);

  //         document.body.appendChild(dialog);
  //     })
  //     .catch(error => console.log('error', error.response));

  // This part for Axios API
  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/chat/completions",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "3a90d02caemshfaad90835578ea2p1d3ef5jsn2936a0f784b3",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Tóm tắt văn bản sau bằng tiếng Việt: " + request.text,
        },
      ],
    },
  };

  try {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        const dialog = document.createElement("div");
        dialog.innerHTML = text;
        dialog.style.position = "fixed";
        dialog.style.width = "400px";
        dialog.style.height = "300px";
        dialog.style.top = "50%";
        dialog.style.left = "50%";
        dialog.style.backgroundColor = "white";
        dialog.style.padding = "10px";
        dialog.style.boxShadow = "0 0 10px gray";
        dialog.style.zIndex = "9999";
        dialog.style.overflowY = "auto";

        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "Đóng";
        closeBtn.addEventListener("click", () => {
          document.body.removeChild(dialog);
        });
        dialog.appendChild(closeBtn);

        document.body.appendChild(dialog);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
});
