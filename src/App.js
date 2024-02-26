import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Start from './Start';
import MemoryLeak from './MemoryLeak';
import WorksFine from './WorksFine';

export default function Square() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/memory-leak">
          <MemoryLeak />
        </Route>
        <Route exact path="/works-fine">
          <WorksFine />
        </Route>
        <Route exact path="/">
          <Redirect to="/start" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}