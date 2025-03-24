import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  // const product = products.find((product) => product.id === id);
  if (request.method === "GET") {
    const data = await Product.findById(id);
    console.log(data);
    response.status(200).json(data);
    return;
  }

  return response.status(404).json({ message: "Method not allowed" });
}
