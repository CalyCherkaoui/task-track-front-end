const routinesDataFixt = {
  data: [
    {
      id: '2',
      type: 'routines',
      attributes: {
        id: 2,
        name: 'reading',
        icon: 'GiBookmarklet',
        priority: 2,
        date: '2021-08-18T18:45:03.589Z',
      },
      relationships: {
        tasks: {
          meta: {
            included: false,
          },
        },
      },
      meta: {
        count: 3,
      },
    },
    {
      id: '3',
      type: 'routines',
      attributes: {
        id: 3,
        name: 'workout',
        icon: 'CgGym',
        priority: 3,
        date: '2021-08-18T19:11:11.162Z',
      },
      relationships: {
        tasks: {
          meta: {
            included: false,
          },
        },
      },
      meta: {
        count: 3,
      },
    },
  ],
  jsonapi: {
    version: '1.0',
  },
};

export default routinesDataFixt;
