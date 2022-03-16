import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieList from "../organisms/MovieList";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.get("/v1/search/movie.json", {
      headers: {
        "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
        "X-Naver-Client-Secret": "kcNwJta1kV",
      },
      params: {
        query: text,
      },
    });
    setMovieList(result.data.items);
  };

  return (
    <Wrapper>
      <PageTitle>Movie</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const PageTitle = styled.h2``;
const Form = styled.form`
  display: flex;
  padding: 15px;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 15px;
`;
const BtnSubmit = styled.button``;

export default Movie;
