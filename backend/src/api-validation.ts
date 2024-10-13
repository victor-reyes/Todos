const ROUTE_TODOS = "/api/v1/todos";

function validateRoute(route?: string): boolean {
  switch (route) {
    case ROUTE_TODOS:
      return true;
    default:
      return false;
  }
}

export { validateRoute };
