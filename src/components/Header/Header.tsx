import { HeaderBlock, HeaderContainer, HeaderLink, ToggleBtnContainer, ToggleButton } from './Header.styled';
import { useDispatch } from 'react-redux';
import { toggleThemeAction } from '../../feature/themeList';


export const Header = () => {
    const dispatch = useDispatch();

    return (
        <HeaderBlock>
            <HeaderContainer>
                <HeaderLink to="/">ToDo</HeaderLink>
                <HeaderLink to="/list">List</HeaderLink>

                <ToggleBtnContainer>
                    <ToggleButton onClick={() => dispatch(toggleThemeAction())}>toggle</ToggleButton>
                </ToggleBtnContainer>
            </HeaderContainer>
        </HeaderBlock>
    );
};