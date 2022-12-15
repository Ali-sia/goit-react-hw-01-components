import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  max-width: 300px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.md};
`;

export const UserName = styled.span`
  margin: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;

  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[4]}px;
`;

export const Label = styled.span`
  padding-bottom: ${p => p.theme.space[2]}px
  color: ${p => p.theme.colors.black};
`;

export const Quantity = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
