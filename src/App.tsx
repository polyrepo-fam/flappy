import { Button, Heading } from "@jonbri/libby-ui";
import { FButton, Abc } from "@jonbri/fibby-ui";
import { TOKEN_COLOR } from "@jonbri/token";
function App() {
  return (
    <div>
      <h1
        style={{
          color: TOKEN_COLOR,
        }}
      >
        flappy
      </h1>
      <div>
        <h2>@jonbri/libby-ui</h2>
        <Button>Hello, Button</Button>
        <Heading level={3}>Hello, Heading</Heading>
      </div>
      <div>
        <h2>@jonbri/fibby-ui</h2>
        <FButton>Hello, FButton</FButton>
        <Abc />
      </div>
    </div>
  );
}

export default App;
