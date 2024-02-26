import { useHistory } from 'react-router-dom';

export default function MemoryLeak() {
  const history = useHistory();
  const shouldRender = true;
  const src = `${Date.now()}WhyIsThisHappening?`;

  return (
    <div>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => history.goBack() }>Go Back</button>
          <span>Memory Leak</span>
          <div>{/* Empty for easy layout */}</div>
        </div>
      </nav>
      <div style={{ marginTop: '2em' }}>
        {shouldRender && <button>{src}</button>}
      </div>
    </div>
  );
};