import styled from 'styled-components';
import colors from 'utils/colors';

const Button = styled.button`
  border: 0;
  background-color: ${props => props.color || colors.blue};
  border-radius: 5px;
  color: ${props => props.textColor || colors.white};
  font-size: 14px;
  padding: 10px 20px;
`;

export default Button;
