<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-sm sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center gap-2" href="/">
      <img src="/images/logo.jpg" alt="logo" height="50" class="rounded" />
      TravelBoard
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/explore">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bucketlist">Bucketlist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/trips">Meine Reisen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/stats">Statistik</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
  {@render children()}
</div>

<style>
  :global(body) {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
  }

  .navbar-brand img {
    border-radius: 8px;
  }

  .nav-link {
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }

  .nav-link:hover {
    color: #ffc107 !important;
  }

  .container {
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1.2rem;
    }
  }
</style>
