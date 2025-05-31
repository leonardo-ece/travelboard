<script>
  const { data } = $props();
</script>

<h1 class="mb-4 text-center">🌍 Meine Reisen</h1>

{#if data.trips.length > 0}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each data.trips as trip}
      <div class="col">
        <div class="card h-100 shadow-sm travel-card">
          {#if trip.destination?.imageUrl}
            <img
              src={trip.destination.imageUrl}
              class="card-img-top destination-image"
              style="height: 200px; object-fit: cover;"
              alt={trip.destination.name}
            />
          {/if}
          <div class="card-body">
            <h5 class="card-title">
              {trip.destination?.name ?? 'Unbekanntes Ziel'}
              <small class="text-muted">({trip.destination?.country ?? '??'})</small>
            </h5>
            <p class="card-text trip-info">
              📅 <strong>Start:</strong> {trip.startDate}<br />
              📅 <strong>Ende:</strong> {trip.endDate}<br />
              📝 <strong>Notizen:</strong> {trip.notes}<br />
              ⭐ <strong>Bewertung:</strong> {trip.rating}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="alert alert-info text-center mt-4">
    Du hast noch keine Reisen erfasst.
  </div>
{/if}

<style>
  h1 {
    font-weight: 600;
    color: #343a40;
  }

  .travel-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .travel-card:hover {
    transform: scale(1.02);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  .destination-image {
    height: 200px;
    object-fit: cover;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .trip-info {
    font-size: 0.95rem;
    color: #555;
  }

  .alert {
    border-radius: 8px;
  }

  @media (max-width: 576px) {
    .card-title {
      font-size: 1.1rem;
    }

    .trip-info {
      font-size: 0.9rem;
    }
  }
</style>
