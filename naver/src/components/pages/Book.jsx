import { useEffect, useState } from "react";
import styled from "styled-components";
import BookList from "../organisms/BookList";
import { getBookList } from "../../apis";
import Pagination from "../organisms/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

const Book = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const reset = () => {
      setText("");
      setQuery("");
      setPage(1);
      setTotal(0);
      setBookList([]);
    };
    const { query, page } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      setText(query);
      if (page) setPage(+page);
    } else {
      reset();
    }
  }, [search]);

  useEffect(() => {
    searchList();
  }, [page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchList = async () => {
    if (query === "") return;

    const start = page * 10 - 9;
    const { items, total } = await getBookList({ query, start });
    setBookList(items);
    setTotal(total);

    const search = qs.stringify({ query, page });
    navigate({ search });
  };

  return (
    <Wrapper>
      <PageTitle>Book</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          plaholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <BookList data={bookList} />
      <Pagination
        nowPage={page}
        total={total}
        onPageChange={(page) => setPage(page)}
      />
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

export default Book;
