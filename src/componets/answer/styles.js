import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #666;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 0;
`;

export const TimeLeft = styled.p`
  font-size: 14px;
  color: #999;
  margin: 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
