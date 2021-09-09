import styled from '@emotion/styled';

export const Main = styled.div`
    width: 100%;
    /* height: 3190px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
`

export const Wrapper = styled.div`
    width: 1200px;
    /* height: 1602px; */
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 102px;
    padding-right: 102px;
    padding-top: 88px;
    padding-bottom: 80px;
    border: none;
	box-shadow: 0px 0px 10px gray;
`

export const Header = styled.div`
    width: 996px;
    height: 80px;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #F2F2F2;
`

export const Profile = styled.div`
    width: 996px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderLeft = styled.div`
    width: 190px;
    height: 60px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProfileImg = styled.img`
    width: 46px;
    height: 46px;
`

export const ProfileName = styled.div`
    width: 126px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeaderRight = styled.div`
    width: 65px;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Link = styled.img`
    width: 26px;
    height: 15px;
`

export const Map = styled.img`
    width: 19px;
    height: 25px;
`

export const Body = styled.div`
    width: 996px;
    height: 710px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: space-between; */
`

export const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
    margin-top: 80px;
`

export const Picture = styled.div`
    width: 996px;
    height: 480px;
    background-color: #F2F2F2;
    margin-top: 40px;
    
`

export const Contents = styled.div`
    width: 996px;
    margin-top: 40px;
`

export const Youtube = styled.div`
    width: 486px;
    height: 240px;
    background-color: black;
    margin-top: 120px;
`

export const Footer = styled.div`
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
`

export const LikeDiv = styled.div`
    width: 40px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFD600;
`

export const DisLikeDiv = styled.div`
    width: 40px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #828282;
`

export const Like = styled.img`
    width: 22px;
    height: 20px;
`

export const ButtonBox = styled.div`
    margin-top: 80px;
`

export const ChangeButton = styled.button`
    width: 180px;
    height: 45px;
    background-color: white;
    border: 1px solid #F2F2F2;
    margin-left: 24px;
    cursor: pointer;
    :hover{
        background-color: #FFD600;
    }
`




export const CommentWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
`

export const CommentTitle = styled.div`
    display: flex;
    align-items: center;
`


export const CommentIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;
`

export const CommentTop = styled.div`
    display: flex;
    height: 56px;
    align-items: center;
    margin-top: 42px;
`


export const CommentWriter = styled.input`
    width: 180px;
    height: 52px;
    border: none;
    border: 1px solid #BDBDBD;
    padding-left: 20px;
`

export const CommentPassword = styled.input`
    width: 180px;
    height: 52px;
    border: none;
    border: 1px solid #BDBDBD;
    margin: 24px;
    padding-left: 20px;
`

export const ContentsInputBox = styled.div`
    /* width: 1200px;
    height: 161px;
    border: 1px solid #BDBDBD; */
`


export const CommentContents = styled.input`
    width: 1200px;
    height: 110px;
    border: none;
    border: 1px solid #BDBDBD;
    margin-top: 20px;
    border-bottom: 1px solid #F2F2F2;
`

export const CommentLengthCheckBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
    border-left: 1px solid #BDBDBD;
`

export const CommentButton = styled.button`
    width: 91px;
    height: 52px;
    border:none;
    background-color: black;
    color: white;
`

export const CommentMap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 1200px;
    border-bottom: 1px solid #BDBDBD;
    margin-top: 40px; 
`
export const CommentProfileImageBox = styled.div`
    display: flex;
    /* align-items: center; */
    width: 5%;
`

export const CommentProfileImage = styled.img`
    width:40px;
    height:40px;
`

export const Row = styled.div`
    width: 1200px;
    
    display:flex;

`
export const CommentEditButton = styled.img`
    width:18px;
    height:18px;
`

export const CommentDeleteButton = styled.img`
    width:14px;
    height:14px;
`

export const MapBox = styled.div`
    width: 90%;
    /* height: 130px; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`

export const MapWriteRating = styled.div`
    display: flex;
`

export const MapWriter = styled.div`
    font-size: 16px;
    font-weight: 500;
    /* line-height: 23.68px; */
`
export const MapRating = styled.div`
    margin-left: 18px;
`

export const MapContents = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #4F4F4F;
`

export const MapDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-top: 20px;
    margin-left: 60px;
`

export const EditBox = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-around;
    width: 5%;
`


// export const CommentEdit = styled.div`

// `