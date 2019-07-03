const { scrapeExtremetech, scrapeFurenexo, scrapeLaptop, scrapePcgamer, scrapePureinfotech, scrapeTomshardware, scrapeWindowscentral, scrapeEasypcmod, scrapePcworld, scrapeMuo } = require('../server/routes/scraping')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  console.log('Seeds are running please wait.......')
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "Compromise",
          description:
            "You do not need the most expensive pieces to start off start of with a good base and work your way up",
          type: "tip",
          source_url: ""
        },
        {
          id: 2,
          title: "Take What You Need Not What You Want.",
          description:
            "Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.",
          type: "tip",
          source_url: ""
        },
        {
          id: 3,
          title: 'Are Budget builds ACTUALLY worth it?',
          description: 'Budget gaming PCs are super popular, but are you actually causing yourself more harm than good when you shop for as cheap as possible?',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed/7EnRjlsvJ3Y'
        },
        {
          id: 4,
          title: 'How to pick the RIGHT video card!',
          description: 'Trying to find the right GPU can be frustrating... so here are some things to think about when shopping for your next video card!',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed/3p_AdODjL_w'
        },
        {
          id: 5,
          title: 'Intel i9 9900K... is this REALLY worth it??',
          description: 'The Intel 9900K is here! But at what cost??',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed/9yQRmbe2QPU'
        },
        {
          id: 6,
          title: 'The CHEAPEST Heatsink on the Market',
          description: 'How good is a heatsink that costs only $5?',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed?v=VOd1oN1wPSk&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=25'
        },
        {
          id: 7,
          title: 'EKWB Predator 240 & 360 Liquid Coolers - Uncompromised performance?',
          description: 'The EKWB Predator series provides a pretty badass entry into the "expandable all-in-one" liquid cooling market. Is it a must have for newbies and tinkerers alike?',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed?v=YDCMMf-_ASE&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=35'
        },
        {
          id: 8,
          title: 'Homemade Water Block Review - My Scrapyard Wars 2 Cooling Solution!',
          description: "Is making your own water block feasible? I decided to test that out using my Scrapyard Wars 2 water block made on my neighbor's CNC machine.",
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed?v=8OmkmluAYAQ&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=37'
        },
        {
          id: 9,
          title: 'Cleaning Hacks',
          description: "You can use a vacuum to suck up dirt, dust, or hair around the computer. However, do not use a vacuum inside your computer as it generates static electricity that can damage your computer. If you need to use a vacuum inside your computer, use a portable battery powered vacuum or try compressed air.",
          type: 'tip',
          source_url: ''
        },
        {
          id: 10,
          title: 'Size Does Not Matter',
          description: "Buying a case too large for their needs. These days you can fit 6 HDD's into ITX cases. It depends on your needs though.",
          type: 'tip',
          source_url: ''
        },
        {
          id: 11,
          title: 'Newer Is Not Always Better',
          description: "An i7 is only necessary if you're utitlizing programs that can take advantage of it's features. (Hyper-Threading, Multi-Cores, etc). If you're only gaming with no intention of utilizing those programs stick with the i5.",
          type: 'tip',
          source_url: ''
        },
        {
          id: 12,
          title: 'Ground Yourself',
          description: "Touch something metallic to ground yourself. before you handle anything hardware related. You don't want any static buildup to discharge onto your fragile motherboard. When installing in the case, plug in the psu and leave the switch off to ground the case as well.",
          type: 'tip',
          source_url: ''
        },
        {
          id: 13,
          title: "It's All About The Planning",
          description: "Plan out your airflow before installing your fans into your case. Usually there's an exhaust on the back, and and an intake on the front. Therefore, your CPU cooler should blow toward the back of the case.",
          type: 'tip',
          source_url: ''
        },
        {
          id: 14,
          title: 'Use The Force',
          description: "The CPU bracket needs a considerable amount of force to lock it in. Lock in the processor before you put the heatsink on. Installing RAM needs some force as well to 'lock' it into place. It can only go one way!",
          type: 'tip',
          source_url: ''
        },


      ])
    })
    .then(function () {
      return Promise.all([
        scrapeExtremetech(17),
        scrapeFurenexo(18),
        scrapeLaptop(19),
        scrapePcgamer(20),
        scrapePureinfotech(21),
        scrapeTomshardware(22),
        scrapeWindowscentral(23),
        scrapeEasypcmod(24),
        scrapePcworld(25),
        scrapeMuo(26)
    ])
  })
}

