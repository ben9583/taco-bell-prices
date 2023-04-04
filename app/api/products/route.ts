import { NextRequest, NextResponse } from "next/server";
import type { TacoBellMenuResponse } from "../../../lib/taco-bell/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const storeID = searchParams.get('storeID');

  if(!storeID) {
    return NextResponse.json({ error: 'Missing store ID' }, { status: 400 });
  }

  const response = await fetch(`https://www.tacobell.com/tacobellwebservices/v2/tacobell/products/menu/${storeID}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1;; en-US) AppleWebKit/537.42 (KHTML, like Gecko) Chrome/48.0.3226.230 Safari/603'
    }
  });
  if(!response.ok) {
    return new Response(response.body, { status: response.status });
  }
  
  const json: TacoBellMenuResponse = await response.json();

  const categories = json.menuProductCategories.map(category => {
    const products = category.products.map(product => {
      return {
        code: product.code,
        name: product.name,
        url: product.url,
        purchasable: product.purchasable,
        price: product.price,
        images: product.images.map(image => image.url),
        calories: product.calories,
      };
    });

    return {
      code: category.code,
      name: category.name,
      products: products,
    };
  });

  return NextResponse.json(categories);
}
