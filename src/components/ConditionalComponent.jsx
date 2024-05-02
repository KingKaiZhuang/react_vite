import Code from "./Code";
import Play from "./Play";

export default function ConditionalComponent() {
  const display = true;
  if (display) {
    return <Play />;
  } else {
    return <Code />;
  }
}
