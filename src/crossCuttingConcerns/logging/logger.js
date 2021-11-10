export class BaseLogger{
    log(data) {
        console.log("Default logger : " + data)
    }
}
//baselogger' ın içerisindeki bütün operasyonları elasticlogger' ın içerisinde de sahip oluyoruz.
export class ElasticLogger extends BaseLogger{
    log(data) {
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data) {
        console.log("Logged to Mongo" + data)
    }
}