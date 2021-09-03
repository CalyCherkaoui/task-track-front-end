const userDataFixt = {
  data: {
    id: '1',
    type: 'users',
    attributes: {
      email: 'welda@test.com',
      username: 'welda',
      id: 16,
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
      self: '/api/v1/users/1',
    },
    meta: {
      admin: false,
    },
  },
  jsonapi: {
    version: '1.0',
  },
};

export default userDataFixt;
