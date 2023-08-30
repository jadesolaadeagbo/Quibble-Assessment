import React, { useState } from 'react';
import styled from 'styled-components';


// Styling using styled components
const SidebarContainer = styled.div`
  height: 98vh;
  border: 1px solid black;
  position: relative;
`;

const CloseButton = styled.button`
  background-color: #bba9a9;
  padding: 8px 80px;
  border-radius: 3rem;
  position: absolute;
  top: 2rem;
  left: 15%;
  font-size: 18px;
  border:none;
  cursor:pointer;
  font-weight:600;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: ${props => props.align};
  height: 98vh;
  padding-top: ${props => (props.padTop ? '25%' : '0')};
  transition: align-items 0.3s ease-in-out, padding-top 0.3s ease-in-out;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap:10px;
  font-weight:600;
`;

const SidebarButton = styled.button`
  background-color: #42c3e3;
  padding: 8px 120px;
  white-space: nowrap;
  font-size: 18px;
  border:none;
  cursor:pointer;
  font-weight:600;
`;

const OpenButton = styled.button`
  background-color: #bba9a9;
  padding: 24px 12px;
  border-radius: 100%;
  white-space: nowrap;
  margin: 5px 5px 0px 5px;
  border:none;
  cursor:pointer;
  font-weight:600;
  font-size:18px;
`;

const Sidebar = ({align, padTop}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SidebarContainer>
{/*         Opens the sidebar and Shows the "close" button when the open button is clicked  */}
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
          // Shows the open button in the default state i.e when the side bar is not opened
          <OpenButton onClick={() => setIsOpen(!isOpen)}>OPEN</OpenButton>
        )}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
