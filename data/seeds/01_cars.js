
exports.seed = function(knex) {
  return knex('specs').del()
    .then(function () {
      return knex('specs').insert([
        {
          id: 2, 
          VIM:"1234456868543",
          make:"Nissan",
          model:"Armada",
          mileage:"234543"
        }
      
      ]);
    });
};