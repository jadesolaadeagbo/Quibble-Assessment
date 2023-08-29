import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  height: 100vh;
  border: 1px solid black;
  position: relative;
`;

const CloseButton = styled.button`
  background-color: #bba9a9;
  padding: 8px 80px;
  font-weight: 600;
  border-radius: 3rem;
  position: absolute;
  top: 10px;
  left: 15%;
  font-size: 18px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: ${props => props.align};
  height: 100vh;
  padding-top: ${props => (props.padTop ? '60px' : '0')};
  transition: align-items 0.3s ease-in-out, padding-top 0.3s ease-in-out;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap:10px;
`;

const SidebarButton = styled.button`
  background-color: #42c3e3;
  padding: 8px 120px;
  font-weight: 600;
  white-space: nowrap;
  font-size: 18px;
`;

const OpenButton = styled.button`
  background-color: #bba9a9;
  padding: 1.5rem 1rem;
  font-weight: 600;
  border-radius: 60px;
  white-space: nowrap;
  margin: 5px 5px 0px 5px;
`;

const Sidebar = ({align, padTop}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SidebarContainer>
        {isOpen ? (
          <div>
            <CloseButton onClick={() => setIsOpen(!isOpen)}>CLOSE</CloseButton>
            <ContentWrapper align={align} padTop={padTop}>
              <ButtonGroup>
                <SidebarButton isBlue>ITEM 1</SidebarButton>
                <SidebarButton isBlue>ITEM 2</SidebarButton>
                <SidebarButton isBlue>ITEM 3</SidebarButton>
                <SidebarButton isBlue>ITEM 4</SidebarButton>
                <SidebarButton isBlue>ITEM 5</SidebarButton>
              </ButtonGroup>
            </ContentWrapper>
          </div>
        ) : (
          <OpenButton onClick={() => setIsOpen(!isOpen)}>OPEN</OpenButton>
        )}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
