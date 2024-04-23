
const IS_ALIVE_ROUTE = new URLPattern({ pathname: "/" });
const TEST_ROUTE = new URLPattern({ pathname: "/books" });
const SEARCH_BY_AUTHOR_ROUTE = new URLPattern({ pathname: "/SeachByAuthor/:author" });

async function handler(req: Request): Promise<Response> {
  const isAlive = IS_ALIVE_ROUTE.exec(req.url);

  if (isAlive) {
    return new Response('Alive');
  }

  const isTestRoute = TEST_ROUTE.exec(req.url);

  if (isTestRoute) {
    const jsonResponse = await fetch("http://openlibrary.org/search/lists.json?q=book&limit=10&offset=0");
    const jsonData = await jsonResponse.json();

    console.log(jsonData);

    return Response.json(jsonData, 
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        }
      });
  }

  const isSearchByAuthor = SEARCH_BY_AUTHOR_ROUTE.exec(req.url);

  if (isSearchByAuthor) {
    const author = isSearchByAuthor.pathname.groups.author;

    const url = `https://openlibrary.org/search.json?author=${author}&sort=new`;

    console.log(url);

    const jsonResponse = await fetch(url);
    const jsonData = await jsonResponse.json();

    console.log(jsonData);

    return Response.json(jsonData, 
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        }
      });
  }


  return new Response("Not found (try /books/1)", {
    status: 404,
  });
}


Deno.serve(handler);
