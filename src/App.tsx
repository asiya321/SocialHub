import { ErrorBoundary } from "components/ErrorBoundary";
import Routes from "navigation";

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
