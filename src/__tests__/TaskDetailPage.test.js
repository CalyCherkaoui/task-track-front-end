import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import TaskDetailPage from '../pages/TaskDetailPage';

describe(
  'Renders correctly Task Detail page',
  () => {
    it(
      'Matches TaskDetailPage snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <TaskDetailPage />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
