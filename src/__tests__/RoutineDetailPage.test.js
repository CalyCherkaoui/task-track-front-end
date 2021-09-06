import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import RoutineDetailPage from '../pages/RoutineDetailPage';

describe(
  'Renders correctly the RoutineDetail page',
  () => {
    it(
      'Matches RoutineDetailPage snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <RoutineDetailPage />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
