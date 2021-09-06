import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import AddTask from '../pages/AddTask';

describe(
  'Renders correctly the AddTask page',
  () => {
    it(
      'Matches AddTask snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <AddTask />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
