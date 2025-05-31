<script>
  const { data } = $props();
</script>

<h1 class="mb-4">🌍 Entdecke Reiseziele</h1>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {#each data.destinations as dest}
    <div class="col">
      <div class="card h-100 shadow-sm travel-card position-relative">
        <a
          href={`/destination/${dest._id}`}
          class="stretched-link card-link-overlay"
          aria-label={`Details zu ${dest.name}`}
        ></a>
        {#if dest.imageUrl}
          <img
            src={dest.imageUrl}
            class="card-img-top destination-image"
            alt={`Bild von ${dest.name}`}
          />
        {/if}
        <div class="card-body">
          <h5 class="card-title">{dest.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{dest.country}</h6>
          <p class="card-text">{dest.description}</p>
        </div>
        <div class="card-footer text-end bg-white border-top-0">
          <a
            href={`/trips/new?destinationId=${dest._id}`}
            class="btn btn-primary btn-sm"
            onclick={(event) => event.stopPropagation()}
          >
            Reise planen
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  h1 {
    text-align: center;
    font-weight: 600;
    color: #333;
  }

  .travel-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
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

  .card-subtitle {
    font-size: 0.9rem;
  }

  .card-text {
    font-size: 0.95rem;
    color: #555;
  }

  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  /* Unsichtbarer, klickbarer Overlay-Link */
  .card-link-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  /* Damit der Button "Reise planen" weiterhin klickbar bleibt */
  .card-footer a {
    position: relative;
    z-index: 2;
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
