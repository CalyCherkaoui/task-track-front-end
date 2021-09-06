import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import RoutineCard from '../component/RoutineCard';
import routineFixture from '../fixtures/routineFixt';

describe(
  'Renders correctly Routine card component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <RoutineCard routine={routineFixture.data.attributes} />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains Routine\'s name',
      () => {
        expect(container.find(routineFixture.data.attributes.name)).toBeTruthy();
      },
    );

    it(
      'Matches Routine Card snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <RoutineCard routine={routineFixture.data.attributes} />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
