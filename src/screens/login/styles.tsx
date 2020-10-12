import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 24px;
`;
