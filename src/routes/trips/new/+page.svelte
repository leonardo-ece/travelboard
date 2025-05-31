<script>
  const { data } = $props();

  let selectedId = $state(data.destination?._id?.toString() ?? '');
  let startDate = $state('');
  let endDate = $state('');
  let notes = $state('');
  let rating = $state(3);
</script>

<h1 class="mb-4 text-center">✍️ Reise erfassen</h1>

<form method="POST" class="trip-form mx-auto">
  <div class="mb-3">
    <label class="form-label" for="destination">Reiseziel</label>
    <select
      id="destination"
      class="form-select"
      name="destinationId"
      bind:value={selectedId}
      required
    >
      <option value="" disabled selected={selectedId === ''}>Bitte wählen</option>
      {#each data.allDestinations as dest}
        <option value={dest._id}>
          {dest.name} ({dest.country})
        </option>
      {/each}
    </select>
  </div>

  <div class="mb-3">
    <label class="form-label" for="start">Startdatum</label>
    <input
      id="start"
      class="form-control"
      type="date"
      name="startDate"
      bind:value={startDate}
      required
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="end">Enddatum</label>
    <input
      id="end"
      class="form-control"
      type="date"
      name="endDate"
      bind:value={endDate}
      required
    />
  </div>

  <div class="mb-3">
    <label class="form-label" for="notes">Notizen</label>
    <textarea
      id="notes"
      class="form-control"
      rows="3"
      name="notes"
      placeholder="Besondere Erlebnisse, Orte, etc."
      bind:value={notes}
    ></textarea>
  </div>

  <div class="mb-4">
    <label class="form-label" for="rating">Bewertung</label>
    <input
      id="rating"
      class="form-range"
      type="range"
      name="rating"
      min="1"
      max="5"
      bind:value={rating}
    />
    <div>⭐ {rating} / 5</div>
  </div>

  <button class="btn btn-success w-100">📌 Reise speichern</button>
</form>

<style>
  h1 {
    font-weight: 600;
    color: #343a40;
  }

  .trip-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
    max-width: 600px;
  }

  .form-label {
    font-weight: 500;
    color: #495057;
  }

  .form-control,
  .form-select {
    border-radius: 0.5rem;
    transition: border-color 0.2s;
  }

  .form-control:focus,
  .form-select:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.25);
  }

  .form-range {
    accent-color: #198754;
  }

  button.btn-success {
    font-weight: 500;
    padding: 0.6rem 1.2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    .trip-form {
      padding: 1rem;
    }
  }
</style>
