import { connectDB } from '$lib/db';
import { redirect } from '@sveltejs/kit'; 

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const destinationId = url.searchParams.get('destinationId');
  const db = await connectDB();

  const allDestinations = await db.collection('destinations').find().toArray();
  const destination = allDestinations.find((d) => d._id === destinationId) ?? null;

  return {
    destinationId,
    destination,
    allDestinations
  };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const destinationId = formData.get('destinationId');
    const startDate = formData.get('startDate');
    const endDate = formData.get('endDate');
    const notes = formData.get('notes');
    const rating = parseInt(formData.get('rating')) || 0;

    if (!destinationId) {
      return { error: 'Destination fehlt' };
    }

    const db = await connectDB();

    await db.collection('trips').insertOne({
      destinationId,
      startDate,
      endDate,
      notes,
      rating,
      createdAt: new Date().toISOString()
    });

    throw redirect(303, '/trips');
  }
};
