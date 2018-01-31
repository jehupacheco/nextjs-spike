import styled from 'styled-components';
import colors from 'utils/colors';

const Textfield = styled.input`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  ${props => props.rounded && 'border-radius: 5px;'}
  font-size: 14px;
  padding: 10px 20px;
  width: ${props => props.width || '100'}%;
`;

export default Textfield;
