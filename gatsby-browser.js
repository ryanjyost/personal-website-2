exports.onRouteUpdate = args => {
   if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const div = document.querySelector('#content');
      if (div) {
         div.scrollTop = 0;
      }
   }
};

// exports.shouldUpdateScroll = args => {
//    //  scroll on < back, forward >, refresh, but not link clicks
//    return args.prevRouterProps == null ||
//       (args.prevRouterProps && args.prevRouterProps.history.action == 'POP')
//       ? true
//       : false;
// };
