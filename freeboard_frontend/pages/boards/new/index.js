import { Wrapper, Title, NamePw } from '../../../../freeboard_frontend/styles/styled'

export default function BoardsNewPage() {
    

    return (
        <Wrapper>
            <Title>게시글 등록화면</Title>
            <NamePw>
                <div>작성자<br/>
                    <input type="text" placeholder="이름을 적어주세요."/>
                </div>
                <div>비밀번호<br/>
                    <input type="password" placeholder="비밀번호를 입력해주세요."/>
                </div>
            </NamePw>    
            <div>
                <div>
                    
                </div>
            </div>
        </Wrapper>
    )
}