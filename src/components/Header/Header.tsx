import { HeaderBlock, HeaderContainer, HeaderLink } from './Header.styled';


export const Header = () => {
    return (
        <HeaderBlock>
            <HeaderContainer>
                <HeaderLink to="/">ToDo</HeaderLink>
                <HeaderLink to="/list">List</HeaderLink>
            </HeaderContainer>
        </HeaderBlock>
    );
};