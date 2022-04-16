module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d10996123a3d97b73c6f77e55fa4ab1'),
  },
});
