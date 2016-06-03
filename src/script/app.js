require('./lib/spa.min.js');
require('./views/guide.js');
require('./views/guide1.js');
require('./views/guide2.js');
require('./views/guide3.js');
require('./views/swiper-3.3.1.min.js');
require('./views/index.js');

// 配置视图的信息
SPA.config({
  indexView: 'guide'
});
SPA.config({
  indexView: 'guide1'
});
SPA.config({
  indexView: 'guide2'
});
SPA.config({
  indexView: 'guide3'
});