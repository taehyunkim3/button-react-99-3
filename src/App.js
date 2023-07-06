
import { styled } from 'styled-components';
import './App.css';
import { Button } from './components/button';


const Box = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
margin-bottom: 10px;
`;
function App() {
  return (
    <div className="App">
      hihi
      <h1>Button</h1>
      <Box>
        <Button icon={'arrow'} negative={true} size={'large'}>Large Primary Button</Button>
        <Button size={'large'}>Large</Button>
        <Button size={'medium'}>Medium</Button>
        <Button size={'small'}>Small</Button>
      </Box>
      <Box>
        <Button icon={'bell'} negative={true} size={'large'} color={'red'}>Large Primary Button</Button>
        <Button size={'large'} color={'red'}>Large</Button>
        <Button color={'red'} size={'medium'}>Medium</Button>
        <Button color={'red'} size={'small'}>Small</Button>
      </Box>

    </div>
  );
}

export default App;
