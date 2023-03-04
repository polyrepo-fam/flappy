import { Button, Heading } from "@polyrepo-fam/libby-ui";
import { FButton, Abc } from "@polyrepo-fam/fibby-ui";
import { TOKEN_COLOR } from "@polyrepo-fam/token";
function App() {
  return (
    <div>
      <a href="https://github.com/polyrepo-fam">polyrepo-fam</a>
      <h1
        style={{
          color: TOKEN_COLOR,
        }}
      >
        flappy
      </h1>
      <div>
        <h2>@polyrepo-fam/libby-ui</h2>
        <Button>Hello, Button</Button>
        <Heading level={3}>Hello, Heading</Heading>
      </div>
      <div>
        <h2>@polyrepo-fam/fibby-ui</h2>
        <FButton>Hello, FButton</FButton>
        <Abc />
      </div>
    </div>
  );
}

export default App;
