<div class="cover-title">
  <h1>{{ config.site_name }}</h1>
  {% if config.site_description %}
  <p class="cover-subtitle">{{ config.site_description }}</p>
  {% endif %}
  {% if config.extra.manual_date %}
  <p class="cover-date">{{ config.extra.manual_date }}</p>
  {% endif %}
</div>
