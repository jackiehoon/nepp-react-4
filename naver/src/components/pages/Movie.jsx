import { useEffect, useState } from "react";
import styled from "styled-components";

import { getMovieList } from "../../apis";
import MovieList from "../organisms/MovieList";
import { countryList, genreList } from "../../datas";

const Movie = () => {
  const [text, setText] = useState("");
  const [genre, setGenre] = useState("ALL");
  const [country, setCountry] = useState("ALL");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    searchMovieList();
  }, [country, genre]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    searchMovieList();
  };

  const searchMovieList = async () => {
    if (text === "") return;

    // const params = { query: text, country };
    // if(country === "ALL") delete params.country;

    const params = { query: text };
    if (country !== "ALL") params.country = country;
    if (genre !== "ALL") params.genre = genre;

    const { items } = await getMovieList(params);
    setMovieList(items);
  };

  return (
    <Wrapper>
      <PageTitle>Movie</PageTitle>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="ALL">전체</option>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setGenre(e.target.value)} value={genre}>
          <option value="ALL">전체</option>
          {genreList.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
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

const Wrapper = styled.div`
  padding: 15px;
`;
const PageTitle = styled.h2``;
const Form = styled.form`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 15px;
`;
const BtnSubmit = styled.button``;

export default Movie;
