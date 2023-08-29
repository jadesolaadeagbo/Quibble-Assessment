import React,{useState} from 'react';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  overflow:hidden;
  max-width: 1920px;
`;

const MainWrapper = styled.div`
  background-color: #b1daf6;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const ResetButton = styled.button`
  background-color: #bba9a9;
  padding: 0.5rem 5rem;
  font-weight: 600;
  border-radius: 3rem;
  margin-top: 2rem;
  position: absolute;
  right: 2rem;
  font-size: 18px;
`;

const InstructionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InstructionText = styled.p`
  text-align: center;
  font-weight: medium;
  font-size: 24px;
  font-weight: 600;
`;

const ShiftButtonsContainer = styled.span`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ShiftButton = styled.button`
  background-color: #bba9a9;
  padding: 0.5rem 4rem;
  font-weight: 600;
  font-size: 18px;
`;

const App = () => {
  const [alignment, setAlignment] = useState('center');
  const [padTop, setPadTop] = useState(false);

  const handleShiftUp = () => {
    setAlignment('flex-start');
    setPadTop(true);
  };

  const handleShiftDown = () => {
    setAlignment('flex-end');
    setPadTop(false);
  };

  const handleReset = () => {
    setAlignment('center');
    setPadTop(false);

  };
  return (
    <AppContainer>
      <Sidebar align={alignment} padTop={padTop}/>
      <MainWrapper>
        <ResetButton onClick={handleReset}>RESET</ResetButton>
        <InstructionContainer>
          <div>
            <InstructionText>Click "OPEN" and "CLOSE" to navigate sidebar</InstructionText>
            <InstructionText>Click "SHIFT UP" to shift contents of the sidebar in an upward direction</InstructionText>
            <InstructionText>Click "SHIFT DOWN" to shift contents of the sidebar in a downward direction</InstructionText>
            <InstructionText>Click "RESET" to revert the position of the items in the sidebar to its default state</InstructionText>
            <InstructionText>resolution: 1920 x 1080, font-sizes: button: 18px instructions: 24px</InstructionText>
            <InstructionText>note: these instruction texts should be included in the program</InstructionText>

            <ShiftButtonsContainer>
              <ShiftButton onClick={handleShiftUp}>SHIFT UP</ShiftButton>
              <ShiftButton onClick={handleShiftDown}>SHIFT DOWN</ShiftButton>
            </ShiftButtonsContainer>

          </div>
        </InstructionContainer>
      </MainWrapper>
    </AppContainer>
  );
};

export default App;
