import { Menu, MenuWrapper, SubMenu, Wrapper } from "./LayoutSidebar.styled";

export default function LayoutSidebarUI(props) {
  return (
    <Wrapper>
      <MenuWrapper>
        <Menu onClick={props.onClickList}>게시글 목록</Menu>
        <Menu onClick={props.onClickWrite}>게시글 작성</Menu>
        <Menu onClick={props.onClickMarket}>중고장터</Menu>
        {props.isMarket && (
          <>
            <SubMenu onClick={props.onClickCreateProduct}>상품 등록</SubMenu>
            <SubMenu>상품 목록</SubMenu>
          </>
        )}
      </MenuWrapper>
    </Wrapper>
  );
}
