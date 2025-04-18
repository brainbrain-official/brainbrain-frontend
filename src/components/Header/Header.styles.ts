import styled from 'styled-components';

export const Layout = styled.header`
  width: 100%;
  height: 7rem;
  padding: 0 6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background-color: ${({ theme }) => theme.color.black[0]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const LanguageButton = styled.button`
  width: 15rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  cursor: pointer;
`;

export const LanguageButtonText = styled.span`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
