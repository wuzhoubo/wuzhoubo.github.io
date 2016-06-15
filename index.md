---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside" id="aside">
      <div class="info-card">
        <h1>Wuzhoubo.GitHub.io</h1>
        <h4>一些小经验、小感悟或是小作品</h4>
      </div>
	  <div id="backgroundCanvas">
		<canvas id="canv" width="400" height="633"></canvas>
      </div>
    </div>

    <div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.blog %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <script src="js/canvas.js"></script>
</body>
