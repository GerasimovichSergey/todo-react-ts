import { HeaderBlock, HeaderContainer, HeaderLink, ToggleBtnContainer, ToggleButton } from './Header.styled';
import { useDispatch } from 'react-redux';
import { toggleThemeAction } from '../../feature/themeList';
import { useTheme } from 'styled-components';
import moonIcon from '../../assets/images/moonIcon.svg';
import sunIcon from '../../assets/images/sunIcon.svg';


export const Header = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <HeaderBlock>
            <HeaderContainer>
                <HeaderLink to="/">ToDo</HeaderLink>
                <HeaderLink to="/list">List</HeaderLink>

                <ToggleBtnContainer>
                    <ToggleButton onClick={() => dispatch(toggleThemeAction())}
                                  themeIcon={theme.name === 'light' ? moonIcon : sunIcon}></ToggleButton>
                </ToggleBtnContainer>
            </HeaderContainer>
        </HeaderBlock>
    );
};