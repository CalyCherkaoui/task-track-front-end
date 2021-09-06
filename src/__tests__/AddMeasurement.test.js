import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import AddMeasurement from '../pages/AddMeasurement';

describe(
  'Renders correctly the AddMeasurement page',
  () => {
    it(
      'Matches AddMeasurement snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <AddMeasurement />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
