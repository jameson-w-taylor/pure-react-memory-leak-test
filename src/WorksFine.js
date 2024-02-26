import { useHistory } from 'react-router-dom';

const MyComponent = ({ shouldRender }) => {
  const src = `${Date.now()}WhyIsThisHappening?`;
  return shouldRender ? <button>{src}</button> : <></>;
};

export default function WorksFine() {
  const history = useHistory();
  const shouldRender = true;

  return (
    <div>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => history.goBack() }>Go Back</button>
          <span>Works Fine</span>
          <div>{/* Empty for easy layout */}</div>
        </div>
      </nav>
      <div style={{ marginTop: '2em' }}>
        <MyComponent shouldRender={shouldRender} />
      </div>
    </div>
  );
};