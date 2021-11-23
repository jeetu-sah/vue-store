export default function isSubscribed({ next, store }) {
  if (!store.getters.auth.isSubscribed) {
    return next({
      name: "admin",
    });
  }

  return next();
}
