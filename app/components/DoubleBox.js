import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

export default styled.div`
  background: #2a2e3b;
  display: flex;
  flex: 2 1 132px;
  margin: 6px;
  word-wrap: break-word;
  overflow: auto;
  animation: 500ms ${zoomInAnimation};
`;
