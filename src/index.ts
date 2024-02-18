const { HOST = "127.0.0.1", PORT = 4000 } = process.env;

Bun.serve({
  development: true,
  port: PORT,
  host: HOST,
  fetch(req) {
    return new Response("Bun!");
  },
});
