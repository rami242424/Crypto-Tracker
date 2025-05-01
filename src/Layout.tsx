import { useRecoilState, useSetRecoilState } from 'recoil';
import { isDarkAtom } from './atoms';
import styled from 'styled-components';


const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${(props) => props.theme.cardBgColor};
  display: flex;
  justify-content: flex-end;
  padding: 12px 20px;
`;

const ToggleButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background: none;
  border: none;
  color: ${(props) => props.theme.accentColor};
  font-size: 14px;
  cursor: pointer;
`;

interface ILayoutProps {
    children :React.ReactNode;
}

function Layout({ children }: ILayoutProps){
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setIsDark((prev) => !prev);

    return (
        <>
            <Header>
                <ToggleButton onClick={toggleDarkAtom}>
                {isDark ? "☀️ LIGHT MODE" : "🌙 DARK MODE"}
                </ToggleButton>
            </Header>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;