import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
    "X-Naver-Client-Secret": "kcNwJta1kV",
  },
});

export const getMovieList = async (params) => {
  const { data } = await instance.get("/v1/search/movie.json", {
    params,
  });
  return data;
};

export const getBookList = async (params) => {
  const { data } = await instance.get("/v1/search/book.json", {
    params,
  });
  return data;
};

export const getBookDetail = async (params) => {
  const { data } = await instance.get("/v1/search/book_adv.json", {
    params,
  });
  return data;
};
