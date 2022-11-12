export default () => ({
  port: process.env.PORT || 7002,
  swagger: {
    enabled: process.env.SWAGGER_ENABLED || true,
    url: process.env.SWAGGER_URL || 'doc',
  },
  helmet: process.env.HELMET_ENABLED || false,
  pokemon_endpoint: 'https://pokeapi.co/api/v2/pokemon',
  channel: process.env.CHANNEL || 'Default',
  country: process.env.COUNTRY || 'CL',
  cors: '*',
});
