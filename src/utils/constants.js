export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWZkMGNlYWExZDVlMzQzNWI3YmQzNzlhODhjNjk3OSIsInN1YiI6IjY1ZTlkZThkMzM5NmI5MDE4Njg0Y2I5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r6thEuts48hYkFH9nCPcRxBL0uSDTr3rkkedRzy21iI'
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY; //read more about .env file and purpose, mostly used to make sure that API key is secured and protected