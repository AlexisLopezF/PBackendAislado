var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema=Schema({
    companyid:String,
    pocketid:String,
    userid:String,
    data:String
    });

    const Transaction = mongoose.model('Transaction',TransactionSchema);
    module.exports = Transaction;