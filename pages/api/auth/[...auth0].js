import { handleAuth } from "@auth0/nextjs-auth0";

const secret = process.env.AUTH0_SECRET;

console.log("random stuff", secret);

console.log(
  "the AUTH0_SECRET env var is set:2 ",
  !!process.env.AUTH0_SECRET,
  process.env.AUTH0_SECRET,
  process.env.AUTH0_BASE_URL
);

export default handleAuth();
