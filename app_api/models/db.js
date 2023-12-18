var mongoose = require('mongoose')
require('dotenv').config()

// Localhost bağlantı
var dbURI = 'mongodb://localhost/mekanbul'

try {
    mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
mongoose.connection.on("connected",() => console.log(dbURI + " adresine bağlanıldı."))
mongoose.connection.on("error", () => console.log("Bağlantı sırasında hata oluştu."))
mongoose.connection.on("disconnected",() => console.log(dbURI + " adresinden bağlantı kesildi."))

process.on("SIGINT",() => {
    mongoose.connection.close()
    console.log("Uygulama kapatıldı")
    process.exit(0)
})

require('./venue')