import { NextRequest, NextResponse } from "next/server";
import { getAveragePrices } from "../../../lib/taco-bell-prices/products";

export async function GET(request: NextRequest) {
  const averagePrices = await getAveragePrices()
  return NextResponse.json(averagePrices);
}