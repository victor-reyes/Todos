const BASE_URL = "/api/v1/";
const ROUTE_TODOS = `${BASE_URL}todos`;
const ROUTE_TODO = `${BASE_URL}todo`;

function validateRoute(route?: string): boolean {
  switch (route) {
    case ROUTE_TODOS:
    case ROUTE_TODO:
      return true;
    default:
      return false;
  }
}

export { validateRoute };
