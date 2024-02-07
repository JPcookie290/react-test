import styled from "@emotion/styled";
import DefaultButton from "./components/DefaultBUtton";

interface IPops {
  title?: string;
  className: string;
}

const MyButton = ({ className }: IPops) => (
  <DefaultButton className={className} title="My Button" />
);

const StyledButton = styled(MyButton)<IPops>`
  color: red;
  padding: 10px;
`;

const StyledDiv = styled("div")`
  padding: 2rem;
  background-color: ${(props) => props.color || "#62ED26"};
`;

const Button = styled("button")`
  color: #000;
  padding 10px;
  background-color: #f0e259;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    color: #fff;
    background-color: #f08e59;
  }
`;

const Section = styled.section`
  padding: 2rem;
  background-color: #62ed26;
`;
const Aside = Section.withComponent("aside");

function App() {
  return (
    <main>
      <Section>This is a styled Section</Section>
      <Aside>This has the same style as Section</Aside>
    </main>
  );
}

export default App;
