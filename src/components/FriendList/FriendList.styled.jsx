import styled from 'styled-components';

export const UserImage = styled.img`
  margin-right: ${p => p.theme.space[4]}px;

  width: 60px;
  height: 60px;

  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.normal} darkgray;
`;
export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Chip = styled.span`
  margin-right: ${p => p.theme.space[4]}px;

  width: 15px;
  height: 15px;

  border-radius: ${p => p.theme.radii.round};

  background-color: ${props => {
    if (props.type === 'true') {
      return props.theme.colors.isOnline;
    }
    return props.theme.colors.notOnline;
  }};
`;
