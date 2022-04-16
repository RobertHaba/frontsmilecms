module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "robertfrontend@gmail.com",
        from: "robertfrontend@gmail.com",
        subject: `Frontsmile - ${result.email} - Formularz Kontaktowy`,
        text: `Email: ${result.email}; Text: ${result.text}`,
      });
      console.log('SEND');
    } catch (err) {
      console.log(err);
    }
  },
};
