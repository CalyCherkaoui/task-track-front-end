const tasksDataFixture = {
  data: [
    {
      id: '34',
      type: 'tasks',
      attributes: {
        id: 34,
        name: 'retinol',
        priority: 1,
        goal: 2,
        unit: 'per day',
        'created-at': '2021-09-02T14:12:49.575Z',
        routine: 'skin-care',
        'routine-id': 4,
        'author-id': 10,
        icon: 'fas fa-smile-beam',
        'measurements-count': 0,
        'measurements-total': 0,
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
          meta: {
            included: false,
          },
        },
      },
      meta: {
        routine: {
          id: 4,
          name: 'skin-care',
          icon: 'fas fa-smile-beam',
          priority: 1,
          created_at: '2021-08-30T19:10:34.803Z',
          updated_at: '2021-08-30T19:10:34.803Z',
        },
      },
    },
    {
      id: '39',
      type: 'tasks',
      attributes: {
        id: 39,
        name: 'Night sleep',
        priority: 1,
        goal: 8,
        unit: 'hour/day',
        'created-at': '2021-09-02T21:37:04.904Z',
        routine: 'Sleep',
        'routine-id': 7,
        'author-id': 10,
        icon: 'fas fa-bed',
        'measurements-count': 0,
        'measurements-total': 0,
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
          meta: {
            included: false,
          },
        },
      },
      meta: {
        routine: {
          id: 7,
          name: 'Sleep',
          icon: 'fas fa-bed',
          priority: 1,
          created_at: '2021-09-01T18:34:16.732Z',
          updated_at: '2021-09-01T18:34:16.732Z',
        },
      },
    },
    {
      id: '30',
      type: 'tasks',
      attributes: {
        id: 30,
        name: 'vitamin c serum',
        priority: 2,
        goal: 2,
        unit: 'per day',
        'created-at': '2021-09-01T18:30:35.473Z',
        routine: 'skin-care',
        'routine-id': 4,
        'author-id': 10,
        icon: 'fas fa-smile-beam',
        'measurements-count': 1,
        'measurements-total': 1,
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
          meta: {
            included: false,
          },
        },
      },
      meta: {
        routine: {
          id: 4,
          name: 'skin-care',
          icon: 'fas fa-smile-beam',
          priority: 1,
          created_at: '2021-08-30T19:10:34.803Z',
          updated_at: '2021-08-30T19:10:34.803Z',
        },
      },
    },
    {
      id: '40',
      type: 'tasks',
      attributes: {
        id: 40,
        name: 'yoga',
        priority: 2,
        goal: 1,
        unit: 'hour',
        'created-at': '2021-09-03T20:50:52.387Z',
        routine: 'skin-care',
        'routine-id': 4,
        'author-id': 10,
        icon: 'fas fa-smile-beam',
        'measurements-count': 0,
        'measurements-total': 0,
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
          meta: {
            included: false,
          },
        },
      },
      meta: {
        routine: {
          id: 4,
          name: 'skin-care',
          icon: 'fas fa-smile-beam',
          priority: 1,
          created_at: '2021-08-30T19:10:34.803Z',
          updated_at: '2021-08-30T19:10:34.803Z',
        },
      },
    },
    {
      id: '36',
      type: 'tasks',
      attributes: {
        id: 36,
        name: 'chia pudding',
        priority: 3,
        goal: 2,
        unit: 'bol per day',
        'created-at': '2021-09-02T14:14:04.181Z',
        routine: 'Diet',
        'routine-id': 6,
        'author-id': 10,
        icon: 'fas fa-utensils',
        'measurements-count': 0,
        'measurements-total': 0,
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
          meta: {
            included: false,
          },
        },
      },
      meta: {
        routine: {
          id: 6,
          name: 'Diet',
          icon: 'fas fa-utensils',
          priority: 2,
          created_at: '2021-08-30T23:58:15.878Z',
          updated_at: '2021-08-30T23:58:15.878Z',
        },
      },
    },
    {
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
          meta: {
            included: false,
          },
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
  ],
  jsonapi: {
    version: '1.0',
  },
};

export default tasksDataFixture;
