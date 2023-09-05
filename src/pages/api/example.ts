import type { APIRoute } from "astro";

let counter = 0;

export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({
      counter
    })
  )
}

export const POST: APIRoute = ({ params, request }) => {
  counter++;
  return new Response(JSON.stringify({
    counter
    })
  ;
}
