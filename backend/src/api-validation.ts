import { Route } from "./routes";
import { TodoSchema } from "./todo";

const BASE_URL = "/api/v1/";
const ROUTE_GET_TODOS = `${BASE_URL}todos:GET`;
const ROUTE_POST_TODO = `${BASE_URL}todo:POST`;

function getRoute(url: string, method: string): Route | null {
  switch (`${url}:${method}`) {
    case ROUTE_GET_TODOS:
      return "get_todos";
    case ROUTE_POST_TODO:
      return "post_todo";
    default:
      return null;
  }
}

function validateBody(body: string): boolean {
  try {
    const potentialTodo = JSON.parse(body);
    const result = TodoSchema.safeParse(potentialTodo);
    return result.success;
  } catch (error) {
    console.error("Invalid JSON:", error);
  }
  return false;
}

export { getRoute, validateBody };
