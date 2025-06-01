import { connectDB } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const db = await connectDB();
  const trips = await db.collection('trips').find().toArray();
  const destinations = await db.collection('destinations').find().toArray();

  const destinationMap = Object.fromEntries(destinations.map(d => [d._id.toString(), d]));

  const totalTrips = trips.length;
  const uniqueDestinations = new Set(trips.map(t => t.destinationId)).size;
  const avgRating = trips.reduce((sum, t) => sum + (t.rating || 0), 0) / totalTrips || 0;

  const countryCount = {};
  for (const trip of trips) {
    const dest = destinationMap[trip.destinationId];
    if (dest) {
      countryCount[dest.country] = (countryCount[dest.country] || 0) + 1;
    }
  }

  const mostVisitedCountry = Object.entries(countryCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '-';

  const avgDays =
    trips
      .map(t => (new Date(t.endDate) - new Date(t.startDate)) / (1000 * 60 * 60 * 24))
      .reduce((sum, d) => sum + d, 0) / totalTrips || 0;

  return {
    stats: {
      totalTrips,
      uniqueDestinations,
      avgRating: avgRating.toFixed(1),
      mostVisitedCountry,
      avgDays: avgDays.toFixed(1)
    }
  };
}