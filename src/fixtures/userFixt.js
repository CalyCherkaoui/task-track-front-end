const userDataFixt = {
  data: {
    id: '18',
    type: 'users',
    attributes: {
      email: 'sailormoon@test.com',
      username: 'sailormoon',
      id: 18,
    },
    relationships: {
      tasks: {
        meta: {
          included: false,
        },
      },
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
