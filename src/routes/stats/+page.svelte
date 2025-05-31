<script>
  const { data } = $props();
</script>

<h1 class="mb-4 text-center">📈 Statistik</h1>

<div class="row g-4 stats-grid">
  <div class="col-md-6 col-lg-4">
    <div class="card border-success shadow-sm stat-card">
      <div class="card-body">
        <h5 class="card-title">Anzahl Reisen</h5>
        <p class="card-text display-6">{data.stats.totalTrips}</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-4">
    <div class="card border-primary shadow-sm stat-card">
      <div class="card-body">
        <h5 class="card-title">Unterschiedliche Ziele</h5>
        <p class="card-text display-6">{data.stats.uniqueDestinations}</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-4">
    <div class="card border-warning shadow-sm stat-card">
      <div class="card-body">
        <h5 class="card-title">Ø Bewertung</h5>
        <p class="card-text display-6">{data.stats.avgRating} ⭐</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-6">
    <div class="card border-danger shadow-sm stat-card">
      <div class="card-body">
        <h5 class="card-title">Meistbesuchtes Land</h5>
        <p class="card-text display-6">{data.stats.mostVisitedCountry}</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-6">
    <div class="card border-info shadow-sm stat-card">
      <div class="card-body">
        <h5 class="card-title">Ø Reisedauer</h5>
        <p class="card-text display-6">{data.stats.avgDays} Tage</p>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    font-weight: 600;
    color: #343a40;
  }

  .stat-card {
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .stat-card:hover {
    transform: scale(1.015);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  .card-title {
    font-size: 1.1rem;
    color: #495057;
    font-weight: 500;
  }

  .card-text {
    font-weight: 600;
    color: #212529;
  }

  @media (max-width: 576px) {
    .card-text {
      font-size: 1.5rem;
    }

    .card-title {
      font-size: 1rem;
    }
  }
</style>
