export default class User {
    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName  //user da firstname oluştur onun değeri constructor'a gönderilen firstname olsun.
        this.lastName = lastName
        this.city = city
    }
}