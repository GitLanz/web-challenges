import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  //   const product = getProductById.find((product) => {
  //     return product.id === id;
  //   });
  // sad path
  if (!product) {
    response.status(404).json({ status: "not found" });
    return;
  }
  // happy path
  response.status(200).json(product);
  return;
}
