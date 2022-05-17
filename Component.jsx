export default function Component({ onClick, handleError }) {
  return (
    <button
      onClick={() => {
        try {
          onClick();
        } catch (err) {
          handleError(err);
          throw err;
        }
      }}
    >
      Click Me
    </button>
  );
}
