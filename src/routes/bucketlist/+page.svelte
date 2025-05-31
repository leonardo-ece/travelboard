<script>
  const { data } = $props();

  // Nach priority sortieren (kleinste zuerst = höchste Priorität)
  const sorted = [...data.bucketlist].sort((a, b) => a.priority - b.priority);
</script>

<h1 class="mb-4 text-center">📌 Meine Bucketlist</h1>

{#if sorted.length > 0}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each sorted as entry}
      <div class="col">
        <div class="card h-100 shadow-sm bucketlist-card">
          {#if entry.imageUrl}
            <img
              src={entry.imageUrl}
              class="card-img-top destination-image"
              alt={entry.name}
            />
          {/if}
          <div class="card-body">
            <h5 class="card-title">{entry.name} <small class="text-muted">({entry.country})</small></h5>
            <p class="card-text">{entry.notes}</p>
          </div>
          <div class="card-footer text-muted">
            ⏫ Priorität: <strong>{entry.priority}</strong>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div class="alert alert-info text-center">
    Deine Bucketlist ist leer. Füge neue Ziele hinzu!
  </div>
{/if}

<style>
  h1 {
    font-weight: 600;
    color: #343a40;
  }

  .bucketlist-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .bucketlist-card:hover {
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

  .card-text {
    font-size: 0.95rem;
    color: #555;
  }

  .card-footer {
    background-color: #f8f9fa;
    font-size: 0.9rem;
  }

  .alert {
    margin-top: 2rem;
    border-radius: 8px;
  }

  @media (max-width: 576px) {
    .card-title {
      font-size: 1.1rem;
    }

    .card-text {
      font-size: 0.9rem;
    }
  }
</style>
