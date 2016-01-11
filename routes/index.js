var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Computronik | Servicio técnico en computadoras para Hogares y Empresas' });
});
/* PAGINA DE SERVICIOS*/
router.get('/servicios', function(req, res, next) {
  res.render('servicios',{title:"Servicio técnico informático profesional"});
});
/* PAGINA DE CONTACTANOS*/
router.get('/contactanos', function(req, res, next) {
  res.render('contactanos',{title:"Contactanos para brindarte la mejor ayuda. "});
});
/* PAGINA DE LOGIN*/
router.get('/login', function(req, res, next) {
  res.render('login',{title:"Inicia sesión para poder acceder al taller gratuito y aportar comentarios que ayudaran a resolver problemas."});
});

/*PAGINA KASPERSKY*/
router.get('/promocion', function(req, res, next) {
  res.render('promocion',{title:"SUPER-DESCUENTO Kaspersky Antivirus"});
});

/*PAGINA PICHINCHA MI VECINO*/
router.get('/pichincha-mi-vecino', function(req, res, next) {
  res.render('pichincha-mi-vecino',{title:"Computronik es PICHINCHA MI VECINO corresponsal no bancario de Banco Pichincha"});
});

/*BLOG DE COMPUTRONIK*/
router.get('/blog', function(req, res, next) {
  res.render('blog',{title:"Enterate de todas las cosas que hacemos, revisa los talleres y manuales gratis"});
});

module.exports = router;
