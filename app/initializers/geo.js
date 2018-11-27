export function initialize(application) {
  if (typeof FastBoot === 'undefined') {
    application.deferReadiness();
    let geo = navigator.geolocation;
    geo.getCurrentPosition((pos) => {
      let { coords } = pos;
      let loc = {
        lat: coords.latitude,
        lng: coords.longitude
      };
      application.register('data:location', loc, {
        instantiate: false
      });
      application.advanceReadiness();
    });
  } else {
    console.log('fast booting...');
  }
}

export default {
  name: 'geo',
  initialize
};
