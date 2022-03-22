import styled from "styled-components";
import {
  PageWrapper,
  Main,
  Box,
  Logo,
  BtnSubmit,
  Form,
  InputText,
  SignupWrapper,
  CustomLink,
} from "../atoms/login";

const Signup = () => {
  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <Welcome>친구들의 사진과 동영상을 보려면 가입하세요.</Welcome>
          <BtnSubmit>Facebook으로 로그인</BtnSubmit>
          <Form>
            <InputText placeholder="성명" />
            <InputText placeholder="사용자 이름" />
            <InputText placeholder="비밀번호" type="password" />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 있으신가요 <CustomLink to="/login">로그인</CustomLink>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Signup;
