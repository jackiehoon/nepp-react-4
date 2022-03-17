import styled from "styled-components";

const Pagination = ({ nowPage, total, onPageChange }) => {
  // total    = 0.1 1.0 1.1 2.0 2.1 10.0 10.1
  // lastPage = 1 1  2  2  3  10  11

  const lastPage = Math.ceil(total / 10);

  const pageList = [];
  for (let i = 1; i <= lastPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <Page onClick={() => onPageChange(nowPage - 1)}>{"<"}</Page>
      )}
      {pageList.map((page) => (
        <Page
          isActive={page === nowPage}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Page>
      ))}
      {nowPage < lastPage && (
        <Page onClick={() => onPageChange(nowPage + 1)}>{">"}</Page>
      )}
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
`;
const Page = styled.button`
  background: ${({ isActive }) => isActive && "#000"};
  color: ${({ isActive }) => isActive && "#fff"};
`;

export default Pagination;
