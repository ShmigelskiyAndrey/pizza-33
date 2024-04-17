import { MENU } from "@/features/menu/constants";

export async function GET(request: Request) {
  return Response.json(MENU);
}
