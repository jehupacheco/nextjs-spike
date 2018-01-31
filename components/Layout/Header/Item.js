import styled from 'styled-components';
import colors from 'utils/colors';

const Item = styled.div`
  color: ${colors.white};
  font-size: 16px;
  padding: 40px 20px;

  &:hover {
    background-color: ${colors.darkenBlue};
  }
`;

export default Item;
