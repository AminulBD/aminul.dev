import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  return new Response(JSON.stringify({
    "name": "Aminul Islam",
    "facebook": "https://www.facebook.com/aminul.run",
    "linkedin" :"https://www.linkedin.com/in/aminulbd/"
  }, null, 2), {
    headers: { "content-type": "application/json" },
  });
});