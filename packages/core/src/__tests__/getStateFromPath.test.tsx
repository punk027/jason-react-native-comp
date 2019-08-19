import getStateFromPath from '../getStateFromPath';

it('converts path string to initial state', () => {
  expect(
    getStateFromPath(
      'foo/bar/baz%20qux?author=%22jane%20%26%20co%22&valid=true'
    )
  ).toEqual({
    routes: [
      {
        name: 'foo',
        state: {
          routes: [
            {
              name: 'bar',
              state: {
                routes: [
                  {
                    name: 'baz qux',
                    params: { author: 'jane & co', valid: true },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  });
});

it('handles leading slash when converting', () => {
  expect(getStateFromPath('/foo/bar/?count=42')).toEqual({
    routes: [
      {
        name: 'foo',
        state: {
          routes: [
            {
              name: 'bar',
              params: { count: 42 },
            },
          ],
        },
      },
    ],
  });
});

it('handles ending slash when converting', () => {
  expect(getStateFromPath('foo/bar/?count=42')).toEqual({
    routes: [
      {
        name: 'foo',
        state: {
          routes: [
            {
              name: 'bar',
              params: { count: 42 },
            },
          ],
        },
      },
    ],
  });
});

it('handles route without param', () => {
  expect(getStateFromPath('foo/bar')).toEqual({
    routes: [
      {
        name: 'foo',
        state: {
          routes: [{ name: 'bar' }],
        },
      },
    ],
  });
});

it('returns undefined for invalid path', () => {
  expect(getStateFromPath('//')).toBe(undefined);
});
