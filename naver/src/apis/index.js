import axios from "axios";

export const getMovieList = async (params) => {
  const { data } = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
      "X-Naver-Client-Secret": "kcNwJta1kV",
    },
    params,
  });
  return data;
};

export const getBookList = async (params) => {
  const { data } = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
      "X-Naver-Client-Secret": "kcNwJta1kV",
    },
    params,
  });
  return data;
};

export const getBookDetail = async (params) => {
  const { data } = await axios.get("/v1/search/book_adv.json", {
    headers: {
      "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
      "X-Naver-Client-Secret": "kcNwJta1kV",
    },
    params,
  });
  return data;
};
