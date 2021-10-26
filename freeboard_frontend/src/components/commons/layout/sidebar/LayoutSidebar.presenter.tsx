import PointCharge from "../../../units/market/pointCharge/pointCharge.container";
import { Menu, MenuWrapper, SubMenu, Wrapper } from "./LayoutSidebar.styled";

export default function LayoutSidebarUI(props: any) {
  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <Menu onClick={props.onClickList}>게시글 목록</Menu>
          <Menu onClick={props.onClickWrite}>게시글 작성</Menu>
          <Menu onClick={props.onClickMarket}>중고장터</Menu>
          {props.isMarket && (
            <>
              <SubMenu onClick={props.onClickCreateProduct}>상품 등록</SubMenu>
              <SubMenu onClick={props.onClickProductList}>상품 목록</SubMenu>
              <SubMenu onClick={props.onClickCharge}>충전하기</SubMenu>
            </>
          )}
          <Menu onClick={props.onClickMyPage}>마이페이지</Menu>
        </MenuWrapper>
      </Wrapper>
      <PointCharge
        modalVisible={props.modalVisible}
        setModalVisible={props.setModalVisible}
      />
    </>
  );
}
