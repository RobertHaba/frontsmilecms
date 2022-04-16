module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'robertfrontend@gmail.com',
        defaultReplyTo: 'robertfrontend@gmail.com',
        testAddress: 'robertfrontend@gmail.com',
      },
    },
  },
  // ...
});