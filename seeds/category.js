exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert([
        {
          id: 1,
          name: "Power Supply"
        },
        {
          id: 2,
          name: "CPU"
        },
        {
          id: 3,
          name: "CPU Cooling"
        },
        {
          id: 4,
          name: "Motherboard"
        },
        {
          id: 5,
          name: "Memory"
        },
        {
          id: 6,
          name: "Storage"
        },
        {
          id: 7,
          name: "Graphics Card"
        },
        {
          id: 8,
          name: "Case"
        },
        {
          id: 9,
          name: "Optical Drive"
        },
        {
          id: 10,
          name: "Peripherals"
        },
        {
          id: 11,
          name: "General Knowledge"
        }
      ]);
    });
};
