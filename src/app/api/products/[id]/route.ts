import { MENU } from "@/features/menu/constants";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const product = MENU.find((el) => {
    return el.id === Number(params.id);
  });
  if (product) {
    return Response.json(product);
  }
  return new Response("Not found", {
    status: 404,
  });
}
