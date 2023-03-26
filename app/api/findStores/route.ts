import { NextRequest, NextResponse } from "next/server";
import type { TacoBellStore, TacoBellStoresResponse } from "../../../lib/taco-bell/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json({ error: "Missing latitude/longitude" }, { status: 400 });
  }

  const response = await fetch(`https://www.tacobell.com/tacobellwebservices/v2/tacobell/stores?longitude=${lng}&latitude=${lat}&numberOfStores=15`)
  if (!response.ok) {
    return new Response(response.body, { status: response.status });
  }

  const data: TacoBellStoresResponse = await response.json()
  const nearByStores = data.nearByStores.map(store =>  {
    return {
      storeStatus: store.storeStatus,
      address: store.address,
      geoPoint: store.geoPoint,
      name: store.name,
      storeNumber: store.storeNumber,
      formattedDistance: store.formattedDistance,
      todayBusinessHours: store.todayBusinessHours,
      openingHours: store.openingHours,
    }
  })

  const output = {
    latitude: Number(lat),
    longitude: Number(lng),
    nearByStores: nearByStores,
  }

  return NextResponse.json(output);
}
