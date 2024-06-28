import styled from 'styled-components';

export const MenuIcon = styled.div`
  width: 40px;  
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #333;  
  border-radius: 5px;  
  box-sizing: border-box;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;  
  }

  &::before, &::after, span {
    content: '';
    position: absolute;
    width: 20px;  
    height: 2px;  
    background-color: #ffffff;
    transition: transform 0.3s ease;
  }

  &::before {
    transform: ${props => props.isOpen ? 'translateY(0) rotate(135deg)' : 'translateY(-8px)'};
  }

  &::after {
    transform: ${props => props.isOpen ? 'translateY(0) rotate(-135deg)' : 'translateY(8px)'};
  }

  span {
    transform: ${props => props.isOpen ? 'scale(0)' : 'scale(1)'};
  }
`;

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #555555;
  color: #C9D1D9;
  position: fixed;
  left: ${({ isOpen }) => isOpen ? '0' : '-250px'};
  top: 0;
  padding: 20px;
  transition: left 0.3s ease-in-out;
`;

export const SidebarLink = styled.div`
  padding: 10px 20px;
  color: #C9D1D9;
  text-decoration: none;
  &:hover {
    color: #58A6FF;
    cursor: pointer;
  }
`;

export const SidebarTitle = styled.h1`
  color: #FFFFFF;
  font-size: 24px;
  text-align: center;
  padding-bottom: 20px;
`;
