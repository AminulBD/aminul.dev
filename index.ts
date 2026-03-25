Deno.serve(() => {
  return new Response(JSON.stringify({
    "name": "Aminul Islam",
    "facebook": "https://www.facebook.com/aminul.run",
    "linkedin" :"https://www.linkedin.com/in/aminulbd/"
  }, null, 2), {
    headers: { "content-type": "application/json" },
  });
});