const adminDataFixt = {
  data: {
    id: '2',
    type: 'users',
    attributes: {
      email: 'admin@test.com',
      username: 'admin',
      id: 2,
      date: '2021-08-25T20:00:42.047Z',
    },
    relationships: {
      tasks: {
        meta: {
          included: false,
        },
      },
    },
    links: {
      self: '/api/v1/users/2',
    },
    meta: {
      admin: true,
    },
  },
  jsonapi: {
    version: '1.0',
  },
};

export default adminDataFixt;
