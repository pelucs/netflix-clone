const API_KEY = "b11573e678ad3f14aeefcae0bd44c32c&language=pt-BR",
      API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async val => {
  let req = await fetch(`${API_BASE}${val}`),
      res = req.json();

  return res;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
      }, {
        slug: "trending",
        title: "Em alta",
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
      }, {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
      }, {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
      }, {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
      }, {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
      }
    ]
  }
}