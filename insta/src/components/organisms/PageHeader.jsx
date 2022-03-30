import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import { ModalAddPost } from "../organisms/modals";

import { ReactComponent as IconHome } from "../../assets/images/home.svg";
import { ReactComponent as IconSearch } from "../../assets/images/search.svg";
import { ReactComponent as IconDirect } from "../../assets/images/direct.svg";
import { ReactComponent as IconNewPost } from "../../assets/images/new-post.svg";
import { ReactComponent as IconExplore } from "../../assets/images/explore.svg";
import { ReactComponent as IconActivity } from "../../assets/images/activity.svg";

const PageHeader = () => {
  return (
    <>
      <Header>
        <Main>
          <Link to="/">
            <ImgLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </Link>
          <SearchWrapper>
            <IconSearch />
            <SearchInput placeholder="검색" />
          </SearchWrapper>

          <Nav>
            <IconWrapper>
              <IconHome />
            </IconWrapper>
            <IconWrapper>
              <IconDirect />
            </IconWrapper>
            <IconWrapper>
              <IconNewPost />
            </IconWrapper>
            <IconWrapper>
              <IconExplore />
            </IconWrapper>
            <IconWrapper>
              <IconActivity />
            </IconWrapper>
            <IconWrapper>
              <Link to="/profile">
                <ProfileImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBg8SBw4PEhATDg0PFRAPEA8ODQ0RFREWFhURExYYKCggGBslHRUfITEhJSkrLi4uFx8zODMtNyg5OisBCgoKDg0OFw8QGjIlHSItNy0tKy4tKzctLy0tKzgtLS0tLSstLi0rNy0tLC0tKy0rOC0tKy03LS0rLTctKy0rN//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhABAAECAgYIBAUFAQAAAAAAAAECAwQRBSExUWFxEhMiMkGRocEzcoGxNFJiotEUQoLh8SP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAdEQEBAQEAAgMBAAAAAAAAAAAAAQIRAzESIUET/9oADAMBAAIRAxEAPwDrAH0XzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe00zVPZiZ5a26nB3KtlE/XKHOu8aBInBXI/s8piWmuiaJ7cTHOMjsOViA64AAAAAAAAAAAAAAAAAAAAAAJ+F0f0ozv6v0+P1Z6OwuURXcjX4Ru4rBLW/yK5x+1jbtxbjKiIjkyBNQeVUxVGVURMcXoCBidHRMZ2NU/l8J5KyqOjOVW10SHj8L1tHSojtR+6FM7/KnrH7FSAqkAAAAAAAAAAAAAAAAAANuEtddfiPDbPKGpYaIo7VU8oZ1eRrM7VlGqNQCC4AAAAACm0hZ6rETlsnXHujLTS1Gdqmd1WXnCrXzexDU5QBpkAAAAAAAAAAAAAAAAWeiPhVfNH2VifomvK5VG+Iny/wCs79N49rMBBYAAAAABE0p+F/ypVCz0tX2KaeOfkrFsekd+wBtgAAAAAAAAAAAAAAAAZ2LnU3YqjwnzhgDroaKorpiadkxm9VOAxfUz0bnd3/l/0tonONSGpxfN7ABl0AAJnKNYrdIYzOJotTzn2h2TrlvEXGXuvvzMbNkcmkF4hQB1wAAAAAAAAAAAAAAAAAASMNjKrGqNdO6fZHHLOuy8XNrHUXNs5Tun+UiKoq2TDniJy2MXxtzyOimctrRdxdFrbVE8I1ypJnPaH8y+RLxOOqvRlR2afWUQG5OMW9AHXAAAAAAAAAAAAAAAAAAAZ2bNV6rK3H8Qs8Po+m3rudqf2s3UjUzarLdmq7P/AJ0zP2Srejaqu/MR6ytYjKNQnd1SYiDToymO9VVPLKGcaOo/V5pY58q18YiTo6jj5sKtGUz3aqo55SnB8qfGKq5oyqO5MT6Si3bNVr4lMx9l+TGca3Zus3Ec6Le/o+m58Pszw2eSsv2KrFWVyPr4SpNSp3NjWA0yAAAAAAAAAAAAAAJGDwk4ic51U79/CHmDw/8AUXOEbZ9l1RTFFMRTGUQxrXPpTOe/by3bi1RlbjKGQIqgAAAAAAADG5RFynKuM4ZAKfGYObE5066fWOaK6GqOlTlVsU2Nw39PX2e7OzhwVzrv1UtZ59xHAUTAAAAAAAAAACmOlVEU7Z1Cbou10rs1TsjZzly3kdk7eLDDWYsWoiPrO+W0HnegAAAAAAAAAAAAYX7UXrUxV4+k72YDnrlE265irbE5PFhpWzlMVRyn2V70S9iFnKAOsgAAAAAAAC60fb6GFp46/NS7XQ0R0aIiPCIhPyVTxx6AkqAAAAAAAAAAAAAA1Yu31uHqjhn9YULo3P3aehdqjdVMeqvjqfkjEBRIAAAAAAABlajO7T80fd0Cgs/Gp+an7r9LyK+MATUAAAAAAAAAAAAAAFHjIyxVfzLxR438XXz9lPH7Y8nppAVRAAAAf//Z" />
              </Link>
            </IconWrapper>
          </Nav>
        </Main>
      </Header>

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>

      <ModalAddPost />
    </>
  );
};

const Header = styled.header`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
const Main = styled.div`
  max-width: 975px;
  box-sizing: border-box;
  padding: 0 20px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgLogo = styled.img`
  width: 103px;
  vertical-align: bottom;
`;

const SearchWrapper = styled.div`
  background: #efefef;
  font-size: 16px;
  padding: 0 16px;
  height: 36px;
  min-width: 125px;
  width: 268px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;
const SearchInput = styled.input`
  background: none;
  border: none;
  flex: 1;
  outline: none;
  margin-left: 12px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  & + & {
    margin-left: 22px;
  }
`;

const OutletWrapper = styled.main`
  max-width: 935px;
  margin: 0 auto;
  padding: 15px 0;
  margin-top: 60px;
`;
export default PageHeader;
