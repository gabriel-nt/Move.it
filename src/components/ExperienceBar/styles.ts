import { motion } from 'framer-motion';
import styled from 'styled-components';

interface BarLevelProps {
  width: string | number;
}

interface TooltipProps {
  left: string | number;
}

export const Header = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.line};
    margin: 0 1.5rem;
    position: relative;
  }

  span {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    margin-top: 4.5rem;
  }

  @media (max-width: 1200px) {
    margin-top: 6rem;
  }
`;

export const BarLevel = styled.div<BarLevelProps>`
  height: 4px;
  border-radius: 4px;
  width: ${({ width }) => width};
  background: ${({ theme }) => theme.colors.green};
`;

export const Tooltip = styled.span<TooltipProps>`
  position: absolute;
  top: 12px;
  left: ${({ left }) => left};
  transform: translateX(-50%);
`;
