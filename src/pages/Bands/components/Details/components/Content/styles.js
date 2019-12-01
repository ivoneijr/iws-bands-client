import styled from 'styled-components';

export const Wrap = styled.div`
  height: 300px;
`;

export const Image = styled.div`
  height: 300px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 1)
    ),
    url(${props => props.image});
  background-repeat: repeat-y;
  background-size: cover;
`;

export const Name = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
  margin-top: -110px;
`;

export const CircleImage = styled.img`
  height: 95px;
  background-image: url(${props => props.image});
  border-radius: 50%;
`;
