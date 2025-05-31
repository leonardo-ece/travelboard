import { connectDB } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const db = await connectDB();
  const trips = await db.collection('trips').find().toArray();
  const destinations = await db.collection('destinations').find().toArray();

  const serializableTrips = trips.map(trip => {
    const destination = destinations.find(d => d._id.toString() === trip.destinationId.toString());

    return {
      ...trip,
      _id: trip._id.toString(),
      destination: destination
        ? {
            name: destination.name,
            country: destination.country,
            imageUrl: destination.imageUrl
          }
        : null
    };
  });

  return {
    trips: serializableTrips
  };
}
