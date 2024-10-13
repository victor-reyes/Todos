const BASE_URL = "/api/v1/";
const ROUTE_TODOS = `${BASE_URL}todos`;

function validateRoute(route?: string): boolean {
  switch (route) {
    case ROUTE_TODOS:
      return true;
    default:
      return false;
  }
}

export { validateRoute };
