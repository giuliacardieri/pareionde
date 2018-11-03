<script id="home-template" type="text/x-handlebars-template"> 
  <section class="main__card-wrapper col-md">
    {{#each this}}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ nome }}</h5>
        <p class="card-text"><i class="card-icon fas fa-tv"></i>Temporada {{ temporada}} - Episódio {{ episodio }}</p>
        <p class="card-text"><i class="card-icon fas fa-calendar"></i>Assistida por último em {{ data }}</p>
        <p class="card-text" hidden><i class="card-icon fas fa-info"></i>{{ comentario }}</p>
        <p class="card-text" hidden><i class="card-icon fas fa-video"></i>{{ tipo }}</p>
        <p class="card-text"><i class="card-icon fas fa-grin-hearts"></i>{{ motivacao }}/10</p>
        <a href="#" class="btn btn-primary">Marcar como favorita</a>
      </div>
    </div>
    {{/each}}
  </section>
</script>