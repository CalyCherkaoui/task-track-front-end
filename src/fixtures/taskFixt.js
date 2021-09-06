const taskDataFixture = {
  data: {
    id: '33',
    type: 'tasks',
    attributes: {
      id: 33,
      name: 'go game',
      priority: 5,
      goal: 60,
      unit: 'min',
      'created-at': '2021-09-02T14:11:32.779Z',
      routine: 'brain-workout',
      'routine-id': 5,
      'author-id': 10,
      icon: 'fas fa-chess',
      'measurements-count': 2,
      'measurements-total': 31,
    },
    relationships: {
      user: {
        meta: {
          included: false,
        },
      },
      routine: {
        meta: {
          included: false,
        },
      },
      mesurements: {
        data: [
          {
            type: 'Mesurements',
            id: '15',
          },
          {
            type: 'Mesurements',
            id: '16',
          },
        ],
      },
    },
    meta: {
      routine: {
        id: 5,
        name: 'brain-workout',
        icon: 'fas fa-chess',
        priority: 1,
        created_at: '2021-08-30T21:50:08.749Z',
        updated_at: '2021-08-30T21:50:08.749Z',
      },
    },
  },
  included: [
    {
      id: '15',
      type: 'Mesurements',
      attributes: {
        id: 15,
        quantity: 8,
        'created-at': '2021-09-02T18:36:13.885Z',
        'task-id': 33,
        'task-name': 'go game',
        'task-icon': 'fas fa-chess',
        unity: 'min',
      },
      relationships: {
        task: {
          meta: {
            included: false,
          },
        },
      },
    },
    {
      id: '16',
      type: 'Mesurements',
      attributes: {
        id: 16,
        quantity: 23,
        'created-at': '2021-09-02T22:01:29.448Z',
        'task-id': 33,
        'task-name': 'go game',
        'task-icon': 'fas fa-chess',
        unity: 'min',
      },
      relationships: {
        task: {
          meta: {
            included: false,
          },
        },
      },
    },
  ],
  jsonapi: {
    version: '1.0',
  },
};

export default taskDataFixture;
