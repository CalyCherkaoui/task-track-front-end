import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import AddRoutine from '../pages/AddRoutine';

describe(
  'Renders correctly the AddRoutine page',
  () => {
    it(
      'Matches AddRoutine snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <AddRoutine />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
