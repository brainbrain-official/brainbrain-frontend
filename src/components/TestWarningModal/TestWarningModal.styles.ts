import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const WarningContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WarningTitle = styled.h3`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.color.black[700]};
  margin: 0;
`;

export const WarningList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WarningItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${theme.color.black[600]};
  font-size: ${theme.fontSize.base};
  line-height: 1.5;

  svg {
    color: ${theme.color.primary[500]};
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;
