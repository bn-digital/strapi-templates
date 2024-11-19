// automatically generates typings for development environments

export default ({ env }) => ({
  autogenerate: env('NODE_ENV') === "development"
})