import { connectDB } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const db = await connectDB();
  const bucketlist = await db.collection('bucketlist').find().toArray();

  const serializable = bucketlist.map(entry => ({
    ...entry,
    _id: entry._id.toString()
  }));

  return { bucketlist: serializable };
}
