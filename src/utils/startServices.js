const axios = require('axios');

exports.startservices = () => {
  const services = [
    'https://user-service-aav2.onrender.com',
    'https://email-service-x8gr.onrender.com/',
    'https://chat-service-qa46.onrender.com',
    'https://call-service-uxn7.onrender.com',
  ];

  services.forEach((url) => {
    axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => err.message);
  });
};
