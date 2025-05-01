import React from "react";
import { useRecoilState } from 'recoil';
import { isDarkAtom } from './atoms';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${(props) => props.theme.cardBgColor};
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;

const ToggleButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  margin-left: auto;
  background: none;
  border: none;
  color: ${(props) => props.theme.accentColor};
  font-size: 14px;
  cursor: pointer;
`;

const BackButton = styled(Link)`
  background: none;
  border: none;
  color: ${(props) => props.theme.accentColor};
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer; 
  svg {
    margin-right: 4px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

interface ILayoutProps {
    children :React.ReactNode;
}

function Layout({ children }: ILayoutProps){
    const [isDark, setIsDark] = useRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setIsDark((prev) => !prev);
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            <Header>
                {!isHome && (
                    <BackButton to="/">
                        ←Home
                    </BackButton>
                    )}
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