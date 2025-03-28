import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.color.black[0]};
`;

export const Content = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
`;

export const IconWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.color.danger[500]};
  font-size: 4rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.black[700]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  white-space: pre-line;
  line-height: 1.6;
`;

export const AdditionalInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.black[400]};
  margin-top: ${({ theme }) => theme.spacing.xl};
  white-space: pre-line;
  line-height: 1.5;
`;

export const ContactLink = styled.span`
  color: ${({ theme }) => theme.color.primary[500]};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.primary[600]};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[0]};
  background-color: ${({ theme }) => theme.color.primary[500]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }
`;
