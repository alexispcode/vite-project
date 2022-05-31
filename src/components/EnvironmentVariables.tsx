// const VITE_ENV = import.meta.env;
const NODE_ENV = process.env;

function EnvironmentVariables() {
  return (
    <div style={{ display: 'flex' }}>
      {/* <pre>VITE_ENV: {JSON.stringify(VITE_ENV, null, 2)}</pre> */}
      <pre>NODE_ENV: {JSON.stringify(NODE_ENV, null, 2)}</pre>
    </div>
  );
}

export default EnvironmentVariables;
