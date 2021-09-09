import styled from '@emotion/styled'

interface ITitleProps{
    zzz:boolean;
}

interface IButtonProps{
    qqq:boolean;
}

export const Mybutton = styled.button`
    background-color: ${(props: IButtonProps) => (props.qqq === true ? 'yellow' : 'grey')};
`


export const Title = styled.h1`
    color: ${(props: ITitleProps) => (props.zzz === true ? 'red' : 'yellow')};
`
