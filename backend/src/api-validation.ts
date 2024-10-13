import { TodoSchema } from "./todo";

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

function validateBody(body: string): boolean {
  try {
    const potentialTodo = JSON.parse(body);
    const result = TodoSchema.safeParse(potentialTodo);
    console.log(result);

    return result.success;
  } catch (error) {
    console.error("Invalid JSON:", error);
  }
  return false;
}

export { validateRoute, validateBody };
