module.exports = function (xero) {
  
  require('./users')(xero);
  require('./contacts')(xero);
  require('./invoices')(xero);
  require('./payments')(xero);
  
}