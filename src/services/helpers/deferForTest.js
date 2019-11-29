/*
This helper function is for mocking an async event in React life-cycle.
E.g. componentDidMount calls an async action creator.
 */

export default () => {
  const d = {};
  d.promise = new Promise((resolve, _reject) => {
    d.resolve = (result) => {
      setTimeout(resolve, 0);
      return Promise.resolve(result);
    };
    d.reject = (rejection) => {
      setTimeout(resolve, 0);
      return Promise.reject(rejection);
    };
  });
  d.then = d.promise.then.bind(d.promise);
  d.catch = d.promise.catch.bind(d.promise);
  return d;
};