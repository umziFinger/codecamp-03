import styled from '@emotion/styled'


export const Mybutton = styled.button`
    background-color: ${(props) => (props.qqq === true ? 'yellow' : 'grey')};
`

export const Title = styled.h1`
    color: ${(props) => (props.zzz === true ? 'red' : 'yellow')};
`
