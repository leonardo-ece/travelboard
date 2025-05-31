<script>
  const { data } = $props();
  const dest = data.destination;
</script>

<a href="/explore" class="btn btn-sm btn-outline-primary mt-3">
  ← Zurück zur Übersicht
</a>

<div class="destination-details mt-4">
  <h1 class="mb-3">{dest.name} <small class="text-muted">({dest.country})</small></h1>

  {#if dest.imageUrl}
    <img
      src={dest.imageUrl}
      alt={`Bild von ${dest.name}`}
      class="img-fluid mb-4 rounded shadow destination-image"
    />
  {/if}

  <div class="info">
    <p><strong>🌐 Kontinent:</strong> {dest.continent}</p>
    <p><strong>📝 Beschreibung:</strong> {dest.description}</p>
    <p><strong>💰 Geschätzte Kosten:</strong> {dest.estimatedCost} CHF</p>
  </div>

  {#if dest.tags?.length}
    <p><strong>🏷️ Tags:</strong>
      {#each dest.tags as tag}
        <span class="badge bg-secondary me-1 mb-1">{tag}</span>
      {/each}
    </p>
  {/if}
</div>

<style>
  .destination-details {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
  }

  h1 {
    font-weight: 600;
    font-size: 2rem;
  }

  .destination-image {
    max-height: 400px;
    object-fit: cover;
    width: 100%;
  }

  .info p {
    font-size: 1.05rem;
    margin-bottom: 0.8rem;
  }

  .badge {
    font-size: 0.85rem;
    padding: 0.4em 0.6em;
    border-radius: 0.5rem;
  }

  @media (max-width: 576px) {
    .destination-details {
      padding: 1rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    .info p {
      font-size: 0.95rem;
    }
  }
</style>
