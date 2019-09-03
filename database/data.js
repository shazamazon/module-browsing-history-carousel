const axios = require('axios');

const data = [
  {
    "ProductId": 1,
    "Category": "quidditch",
    "ItemName": "Harry Potter Collectible Quidditch Set",
    "Price": 17.99,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Collectible+Quidditch+Set/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Collectible+Quidditch+Set/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 2,
    "Category": "quidditch",
    "ItemName": "Harry Potter Child's Deluxe Quidditch Robe - Large",
    "Price": 27.41,
    "Rating": 5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Child\'s+Deluxe+Quidditch+Robe%2C+Large/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Child\'s+Deluxe+Quidditch+Robe%2C+Large/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Child\'s+Deluxe+Quidditch+Robe%2C+Large/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Child\'s+Deluxe+Quidditch+Robe%2C+Large/view3.jpg'],
    "Video": null
  },
  {
    "ProductId": 3,
    "Category": "quidditch",
    "ItemName": "Child's Harry Potter Gryffindor Seeker Quidditch Sport Costume Accessory Kit",
    "Price": 3.99,
    "Rating": 1,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Child\'s+Harry+Potter+Gryffindor+Seeker+Quidditch+Sport+Costume+Accessory+Kit/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 4,
    "Category": "quidditch",
    "ItemName": "Quidditch Kit Set",
    "Price": 45,
    "Rating": 2,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Quidditch+Kit+Set/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 5,
    "Category": "quidditch",
    "ItemName": "MAYBO SPORTS Wiitin Bearing Replaceable Harry Potter Fidget Spinner with Spare Bearing and Tools - The Original Golden Snitch Used in Quidditch Made by Metal by MAYBO SPORTS",
    "Price": 11.99,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/MAYBO+SPORTS+Wiitin+Bearing+Replaceable+Harry+Potter+Fidget+Spinner+with+Spare+Bearing+and+Tools%2C+The+Original+Golden+Snitch+Used+in+Quidditch+Made+by+Metal+by+MAYBO+SPORTS/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/MAYBO+SPORTS+Wiitin+Bearing+Replaceable+Harry+Potter+Fidget+Spinner+with+Spare+Bearing+and+Tools%2C+The+Original+Golden+Snitch+Used+in+Quidditch+Made+by+Metal+by+MAYBO+SPORTS/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/MAYBO+SPORTS+Wiitin+Bearing+Replaceable+Harry+Potter+Fidget+Spinner+with+Spare+Bearing+and+Tools%2C+The+Original+Golden+Snitch+Used+in+Quidditch+Made+by+Metal+by+MAYBO+SPORTS/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/MAYBO+SPORTS+Wiitin+Bearing+Replaceable+Harry+Potter+Fidget+Spinner+with+Spare+Bearing+and+Tools%2C+The+Original+Golden+Snitch+Used+in+Quidditch+Made+by+Metal+by+MAYBO+SPORTS/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/MAYBO+SPORTS+Wiitin+Bearing+Replaceable+Harry+Potter+Fidget+Spinner+with+Spare+Bearing+and+Tools%2C+The+Original+Golden+Snitch+Used+in+Quidditch+Made+by+Metal+by+MAYBO+SPORTS/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/MAYBO+SPORTS+Wiitin+Bearing+Replaceable+Harry+Potter+Fidget+Spinner+with+Spare+Bearing+and+Tools%2C+The+Original+Golden+Snitch+Used+in+Quidditch+Made+by+Metal+by+MAYBO+SPORTS/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 6,
    "Category": "quidditch",
    "ItemName": "Fun Express Wood Witch's Broom Novelty Pens 2-Pack (48 Count)  Great for Halloween-Themed Costumes, Parties, and Activities",
    "Price": 27.29,
    "Rating": 5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Fun+Express+Wood+Witch\'s+Broom+Novelty+Pens+2-Pack+(48+Count)++Great+for+Halloween-Themed+Costumes%2C+Parties%2C+and+Activities/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 7,
    "Category": "quidditch",
    "ItemName": "Rubies Harry Potter Broom",
    "Price": 21.99,
    "Rating": 3.4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Rubies+Harry+Potter+Broom/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 8,
    "Category": "quidditch",
    "ItemName": "Neville Longbottom's Broom",
    "Price": 3.39,
    "Rating": 2.3,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Neville+Longbottom%5C\'s+Broom/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Neville+Longbottom%5C\'s+Broom/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Neville+Longbottom%5C\'s+Broom/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 9,
    "Category": "quidditch",
    "ItemName": "Wizarding World of Harry Potter Quidditch Bludger Bat and Ball Toy Set",
    "Price": 45.8,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Wizarding+World+of+Harry+Potter+Quidditch+Bludger+Bat+and+Ball+Toy+Set/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Wizarding+World+of+Harry+Potter+Quidditch+Bludger+Bat+and+Ball+Toy+Set/view.1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Wizarding+World+of+Harry+Potter+Quidditch+Bludger+Bat+and+Ball+Toy+Set/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 10,
    "Category": "quidditch",
    "ItemName": "Elope Harry Potter Quidditch Goggles for Adults and Kids",
    "Price": 16.4,
    "Rating": 4.91,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Elope+Harry+Potter+Quidditch+Goggles+for+Adults+and+Kids/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Elope+Harry+Potter+Quidditch+Goggles+for+Adults+and+Kids/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Elope+Harry+Potter+Quidditch+Goggles+for+Adults+and+Kids/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Elope+Harry+Potter+Quidditch+Goggles+for+Adults+and+Kids/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Elope+Harry+Potter+Quidditch+Goggles+for+Adults+and+Kids/view4.jpg'],
    "Video": null
  },
  {
    "ProductId": 11,
    "Category": "quidditch",
    "ItemName": "Dewalt DPG55-11C Clear Anti-Fog Protective Safety Glasses with Dual-Injected Rubber Frame and Temples",
    "Price": 6.28,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Dewalt+DPG55-11C+Clear+Anti-Fog+Protective+Safety+Glasses+with+Dual-Injected+Rubber+Frame+and+Temples/view0.jpg'],
    "Video": "https://d1y6jrbzotnyjg.cloudfront.net/V3MSA/53c3302a669846919c3dc6045f38262a/V1/682d6e7beb2649bab966b6eca3060a31/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4?Expires=1567133506&Signature=Hcjyv8a3Q7nJYu7L7OHgJKZ1qZVsHqOjNZmgqvHyJx8o-ExWvbUtHtx4jDKrzewk9azjM3Z0QqUkAe~y2kQRFlcymgmrWXhlj74bBS7aJjA8f7qJljUlCvNHYz6V8UWmyxsRL8QdTfAXEmVl9PBr1vjx-~MyGUnFxU8N85aOiJs_&Key-Pair-Id=APKAJ62XWKZ35EOVO4XA"
  },
  {
    "ProductId": 12,
    "Category": "quidditch",
    "ItemName": "Universal Wizarding World of Harry Potter Quidditch Quaffle Ball",
    "Price": 37.94,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Universal+Wizarding+World+of+Harry+Potter+Quidditch+Quaffle+Ball/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 13,
    "Category": "quidditch",
    "ItemName": "Quidditch Through the Ages (Harry Potter)",
    "Price": 12.4,
    "Rating": 3.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Quidditch+Through+the+Ages+(Harry+Potter)/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Quidditch+Through+the+Ages+(Harry+Potter)/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 14,
    "Category": "quidditch",
    "ItemName": "Harry Potter Headbands Women Girls Hogwarts Houses Ravenclaw Hufflepuff Gryffindor Slytherin (Gryffindor)",
    "Price": 12.95,
    "Rating": 2,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Headbands+Women+Girls+Hogwarts+Houses+Ravenclaw+Hufflepuff+Gryffindor+Slytherin+(Gryffindor)/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Headbands+Women+Girls+Hogwarts+Houses+Ravenclaw+Hufflepuff+Gryffindor+Slytherin+(Gryffindor)/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Headbands+Women+Girls+Hogwarts+Houses+Ravenclaw+Hufflepuff+Gryffindor+Slytherin+(Gryffindor)/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 15,
    "Category": "quidditch",
    "ItemName": "Harry Potter Quidditch Captain Fanny Pack",
    "Price": 22.59,
    "Rating": 4.4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Quidditch+Captain+Fanny+Pack/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Quidditch+Captain+Fanny+Pack/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/quidditch/Harry+Potter+Quidditch+Captain+Fanny+Pack/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 16,
    "Category": "spells",
    "ItemName": "The Goodly Spellbook: Olde Spells for Modern Problems",
    "Price": 10.51,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/thegoodlyspellbook/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/thegoodlyspellbook/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/thegoodlyspellbook/view3.jpg'],
    "Video": null
  },
  {
    "ProductId": 17,
    "Category": "spells",
    "ItemName": "Encyclopedia of 5,000 Spells",
    "Price": 27.03,
    "Rating": 4.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/encyclopedia5000spells/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/encyclopedia5000spells/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/encyclopedia5000spells/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 18,
    "Category": "spells",
    "ItemName": "1001 Spells: The Complete Book of Spells for Every Purpose",
    "Price": 15.2,
    "Rating": 4.4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/1001spells/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/1001spells/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/1001spells/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/1001spells/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/1001spells/view4.jpg'],
    "Video": null
  },
  {
    "ProductId": 19,
    "Category": "spells",
    "ItemName": "The Green Witch: Your Complete Guide to the Natural Magic of Herbs, Flowers, Essential Oils, and More",
    "Price": 13.64,
    "Rating": 4.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/thegreenwitch/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/thegreenwitch/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 20,
    "Category": "spells",
    "ItemName": "Moon Spells: How to Use the Phases of the Moon to Get What You Want",
    "Price": 10.37,
    "Rating": 4.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/moonspells/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/moonspells/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/moonspells/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 21,
    "Category": "spells",
    "ItemName": "Witchcraft: A Handbook of Magic Spells and Potions (Mystical Handbook)",
    "Price": 10.69,
    "Rating": 3.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/witchcrafthandbook/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/witchcrafthandbook/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/witchcrafthandbook/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 22,
    "Category": "spells",
    "ItemName": "The Little Black Book of Nasty Spells",
    "Price": 25,
    "Rating": 5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/nastyspells/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/nastyspells/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 23,
    "Category": "spells",
    "ItemName": "Witchery: Embrace the Witch Within",
    "Price": 11,
    "Rating": 4.8,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/witchery/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 24,
    "Category": "spells",
    "ItemName": "Protection Spells: Clear Negative Energy, Banish Unhealthy Influences, and Embrace Your Power",
    "Price": 16.99,
    "Rating": 4.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/protectionspells/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 25,
    "Category": "spells",
    "ItemName": "The Book of Shadows: White, Red and Black Magic Spells",
    "Price": 12.29,
    "Rating": 4.1,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/bookofshadows/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/bookofshadows/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 26,
    "Category": "spells",
    "ItemName": "Advanced Potion Making",
    "Price": 30.17,
    "Rating": 3.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/advancedpotions/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/advancedpotions/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/advancedpotions/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 27,
    "Category": "spells",
    "ItemName": "Advanced Wizardry: Theory and Practice of the Arcane Lore of High Magic and Incantations",
    "Price": 49.99,
    "Rating": 5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/advancedwizardry/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/advancedwizardry/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/advancedwizardry/view2.jpg'],
    "Video": null
  },
  {
    "ProductId": 28,
    "Category": "spells",
    "ItemName": "The Secrets of High Magic: Vintage Edition",
    "Price": 15.51,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/secretsofhighmagic/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/secretsofhighmagic/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 29,
    "Category": "spells",
    "ItemName": "Love Magic: A Handbook of Spells ,Charms, and Potions",
    "Price": 11.02,
    "Rating": 3.4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/lovemagic/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/lovemagic/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 30,
    "Category": "spells",
    "ItemName": "The Book of Forbidden Knowledge: Black Magic, Superstition, Charms, and Divination",
    "Price": 5.9,
    "Rating": 3.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/forbiddenknowledge/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/spellbooks/forbiddenknowledge/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 31,
    "Category": "accessories",
    "ItemName": "Lofbaz Women's Smocked Waist Aladdin Genie 2 in 1 Harem Pants Jumpsuit",
    "Price": 15.95,
    "Rating": 4.2,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/harempants/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/harempants/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/harempants/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/harempants/view3.jpg' ],
    "Video": null
  },
  {
    "ProductId": 32,
    "Category": "accessories",
    "ItemName": "Forum Novelties Desert Prince Arabian Pants",
    "Price": 15.35,
    "Rating": 3.7,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/forumpants/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 33,
    "Category": "accessories",
    "ItemName": "Forum Novelties Felt Fez Hat",
    "Price": 4.27,
    "Rating": 3.7,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/fez/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 34,
    "Category": "accessories",
    "ItemName": "Forum Novelties 42-Inch Purple Genie Vest Costume",
    "Price": 9.86,
    "Rating": 4.3,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/forumvest/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 35,
    "Category": "accessories",
    "ItemName": "INFLATABLE WIZARD HAT FOR CATS by Accoutrements",
    "Price": 8.99,
    "Rating": 3.9,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/cathat/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 36,
    "Category": "accessories",
    "ItemName": "Elope Fancy Purple Wizard Hat",
    "Price": 16.49,
    "Rating": 5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopepurplehat/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 37,
    "Category": "accessories",
    "ItemName": "elope Harry Potter Albus Dumbledore Costume Tassel Hat",
    "Price": 28.59,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/elopedumbledore/view6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 38,
    "Category": "accessories",
    "ItemName": "Kangaroo Halloween Accessories - Wizard Wig",
    "Price": 14.95,
    "Rating": 4.3,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/kangaroowig/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/kangaroowig/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 39,
    "Category": "accessories",
    "ItemName": "Hibuyer Men's Grand Wizard Costume Deluxe Adult Halloween Fancy Dress",
    "Price": 99.99,
    "Rating": 5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/grandwizard/view7.jpg' ],
    "Video": null
  },
  {
    "ProductId": 40,
    "Category": "accessories",
    "ItemName": "AvaCostume Bronze Tribal Gold Cuff Bracelet for Cosplay Or Belly Dance",
    "Price": 9.99,
    "Rating": 3.8,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/avacostumecuff/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/avacostumecuff/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 41,
    "Category": "accessories",
    "ItemName": "Disney Aladdin Sterling Silver Genie Lamp with 18in Chain",
    "Price": 39.99,
    "Rating": 5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneygenielamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneygenielamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneygenielamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneygenielamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneygenielamp/view4.jpg' ],
    "Video": null
  },
  {
    "ProductId": 42,
    "Category": "accessories",
    "ItemName": "Carfeny High Polished Stainless Steel Smooth Wide Cuff Bangle Bracelet for Women, Gold, Rose Gold and Silver Available",
    "Price": 13.99,
    "Rating": 4.1,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/carfenygoldbangle/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/carfenygoldbangle/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/carfenygoldbangle/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/carfenygoldbangle/view4.jpg' ],
    "Video": null
  },
  {
    "ProductId": 43,
    "Category": "accessories",
    "ItemName": "Disney Jasmine Jewelry Set for Girls Gold",
    "Price": 24.5,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneyjasmine/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/disneyjasmine/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 44,
    "Category": "accessories",
    "ItemName": "Missgrace HMetal Chain Jewelry Headband Head Hair Band Tassels Pearl",
    "Price": 6.99,
    "Rating": 3.6,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/headchain/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/headchain/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/headchain/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/headchain/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/headchain/view4.jpg' ],
    "Video": null
  },
  {
    "ProductId": 45,
    "Category": "accessories",
    "ItemName": "Yozone Belly Dance Bracelet Gold Triangle Bracelet Jewelry Coin Bracelet Hand Decoration Bangle with Ring - 2 PCS",
    "Price": 9.69,
    "Rating": 3.3,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/accessories/yozonecuffs/view6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 46,
    "Category": "wands",
    "ItemName": "Harry Potter, Wizard Training Wand - 11 SPELLS To Cast! Official Toy Wand with Lights & Sounds",
    "Price": 20.49,
    "Rating": 4.2,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view8.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view9.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view10.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view11.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view12.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/harrypotter/view13.jpg'],
    "Video": "https://d1y6jrbzotnyjg.cloudfront.net/V3MSA/1334efda1f6045ed9e70b4da5bb9fe0d/V1/27e32343515d47b2bdcc4d8ab39ab57f/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4?Expires=1567107713&Signature=Dka6J8tKuZvbm51Ka6h5h~Kn3J5~JMoOqYRTk1ouoYlXrG65M-srUN0taHgFWwKtfmUUTuphmMiu5fw8cH9EoyTmwO4pgAvXGRtEYW8NH5Vp9zLTuIV0NFjN9UNtpCghSRQUHho7FqHK8ef6VqIltdKxxv7o3mmLtS7xuzDTyxg_&Key-Pair-Id=APKAJ62XWKZ35EOVO4XA"
  },
  {
    "ProductId": 47,
    "Category": "wands",
    "ItemName": "Hermione Granger's Wand with Ollivanders Wand Box",
    "Price": 37.5,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/hermionegranger/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/hermionegranger/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/hermionegranger/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/hermionegranger/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/hermionegranger/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/hermionegranger/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 48,
    "Category": "wands",
    "ItemName": "The Elder Wand, The Wand of Professor Dumbledore",
    "Price": 37.5,
    "Rating": 4.8,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/elder/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/elder/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/elder/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/elder/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/elder/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/elder/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 49,
    "Category": "wands",
    "ItemName": "Lord Voldemort's Wand in Ollivander's Box",
    "Price": 37.5,
    "Rating": 4.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/voldemort/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/voldemort/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/voldemort/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/voldemort/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/voldemort/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/voldemort/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 50,
    "Category": "wands",
    "ItemName": "The Harry Potter Remote Control Wand",
    "Price": 49,
    "Rating": 3.8,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/remotecontrol/view8.jpg'],
    "Video": "https://d1y6jrbzotnyjg.cloudfront.net/Z7AX4/18b061d1a5df4f1ea6994ea07543e026/V1/581200baec894eb4a778455244f897fd/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4?Expires=1567108541&Signature=LCIunz3~8IbzLgSFa5ccquS6N48JW7ZcVEroM3YW2htgFUilZgj3aY~r76OHyUWrPCe5KslX-gI8tdQ4cCgESXpZc6Zwb5JMaC0GreCez-Ksr7kHKFCW~SVgB4Q7WAjEphpSDBDOZue331pfigbQqTz8n750tkYa6tASWUWm3rw_&Key-Pair-Id=APKAJ62XWKZ35EOVO4XA"
  },
  {
    "ProductId": 51,
    "Category": "wands",
    "ItemName": "The Noble Collection Draco Malfoy's Wand with Ollivander's Wand Box",
    "Price": 37.5,
    "Rating": 4.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/dracomalfoy/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/dracomalfoy/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/dracomalfoy/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/dracomalfoy/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/dracomalfoy/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/dracomalfoy/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 52,
    "Category": "wands",
    "ItemName": "The Noble Collection Professor Snape Wand in Ollivander's Box",
    "Price": 37.5,
    "Rating": 4.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/wands/snape/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/snape/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/snape/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/snape/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/snape/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/wands/snape/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 53,
    "Category": "rarities",
    "ItemName": "Marauders Map",
    "Price": 29.99,
    "Rating": 4.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/rarities/maraudersmap/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/maraudersmap/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/maraudersmap/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/maraudersmap/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/maraudersmap/view4.jpg'],
    "Video": null
  },
  {
    "ProductId": 54,
    "Category": "rarities",
    "ItemName": "Noble Collection - Harry Potter - Hermione's Time Turner",
    "Price": 49,
    "Rating": 4.3,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/rarities/timeturner/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 55,
    "Category": "rarities",
    "ItemName": "WOW! Stuff Collection Harry Potter Invisibility Cloak Deluxe Version",
    "Price": 79.95,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/rarities/invisibilitycloak/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/invisibilitycloak/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/invisibilitycloak/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/invisibilitycloak/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/invisibilitycloak/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/invisibilitycloak/view5.jpg'],
    "Video": "https://d2y5sgsy8bbmb8.cloudfront.net/4713d4b4-cd55-4a39-9641-41b0d6425b5c/default.jobtemplate.mp4.480.mp4"
  },
  {
    "ProductId": 56,
    "Category": "rarities",
    "ItemName": "Harry Potter Wizard Chess Set",
    "Price": 44,
    "Rating": 4.2,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/rarities/wizardschess/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/wizardschess/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/wizardschess/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/wizardschess/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/rarities/wizardschess/view4.jpg'],
    "Video": null
  },
  {
    "ProductId": 57,
    "Category": "food",
    "ItemName": "Jelly Belly Harry Potter Bertie Bott's, 1.2-Ounce (Pack of 8)",
    "Price": 13.06,
    "Rating": 4.3,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/food/bertiebotts/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/bertiebotts/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/bertiebotts/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/bertiebotts/view3.jpg'],
    "Video": null
  },
  {
    "ProductId": 58,
    "Category": "food",
    "ItemName": "The Noble Collection Harry Potter Chocolate Frog Prop Replica",
    "Price": 14.95,
    "Rating": 4.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/food/chocolatefrog/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/chocolatefrog/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/chocolatefrog/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/chocolatefrog/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/chocolatefrog/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/chocolatefrog/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 59,
    "Category": "food",
    "ItemName": "Felix Felicis",
    "Price": 10.25,
    "Rating": 4.5,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/food/felixfelicis/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 60,
    "Category": "food",
    "ItemName": "Polyjuice Potion",
    "Price": 14.88,
    "Rating": 4.1,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/food/polyjuicepotion/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/polyjuicepotion/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/polyjuicepotion/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/polyjuicepotion/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/food/polyjuicepotion/view4.jpg'],
    "Video": null
  },
  {
    "ProductId": 61,
    "Category": "furniture",
    "ItemName": "Pacific Giftware Medieval Fantasy Double Sentinel Dragons Sculptural Wall Floating Shelf",
    "Price": 249.99,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/61/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 62,
    "Category": "furniture",
    "ItemName": "Doowops Light & Heavy Chest - MC Magic Tricks Wooden Box Magic for Professional Magician Stage Illusions Gimmick Props Comedy Funny",
    "Price": 189,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/62/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/62/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/62/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/62/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/62/view4.jpg'],
    "Video": null
  },
  {
    "ProductId": 63,
    "Category": "furniture",
    "ItemName": "Medieval Decor Shower Curtain by Ambesonne, Medieval Wooden Castle Wall Metal Gate Greek Mid-century Design Art Print, Polyester Fabric Bathroom Set with Hooks, 84 Inches Extra Long, Dark Wood'",
    "Price": 39.95,
    "Rating": 3.9,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/63/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 64,
    "Category": "furniture",
    "ItemName": "Design Toscano Egyptian Sphinx Glass Topped Sculptural Table in Faux Gold and Egyptian Palette",
    "Price": 541.5,
    "Rating": 4.6,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/64/view0.jpg'],
    "Video": "https://d1y6jrbzotnyjg.cloudfront.net/V3MSA/c98b5c749e5d4e6e9834824a287ea70d/V1/c92a2bd507d04b66b516199ea10ec632/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4?Expires=1567120495&Signature=anqeOAkI3Pq2LtYZ8jF6gDGi7OIxn-Z9DQEw-KKiuqEMCA5SeQxL6EXESkay9T0wJykJF5qJJBTHWT8HGlc2fby5GHdODnjxDpV798KtegjJfmYjg-EjQjp-XfhzFoKW7m~aUvXasS0uwk-7-ikOOP3nT2sf0naFOXSgbKVZFAk_&Key-Pair-Id=APKAJ62XWKZ35EOVO4XA"
  },
  {
    "ProductId": 65,
    "Category": "furniture",
    "ItemName": "Design Toscano WU70259 King Tutankhamen's Tomb Egyptian Throne Chair, 41 Inch, Gold",
    "Price": 1747.99,
    "Rating": 4.8,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/65/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/65/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/65/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/65/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/65/view4.jpg'],
    "Video": "https://d1y6jrbzotnyjg.cloudfront.net/V3MSA/c26c35c62fbe4233a46948d26488a7ca/V1/130b192c45304fd2b656f6b4d12dbdd9/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4?Expires=1567120171&Signature=jiWQAA8xB3JIziw~GgJwmA8lZg54cU8Fd6KDQurtIc4wcEdKzMiBGn-JpCmSpB7wMmal7GZCw13fFqIYyJDvm9awDHPm8xZzyATvwHsytlOgqW0mnz-PGRKfbSumOPsSKgvHIuaKl34UB43VLMGfAiIYgzllffY17ZFm0W-K0gw_&Key-Pair-Id=APKAJ62XWKZ35EOVO4XA"
  },
  {
    "ProductId": 66,
    "Category": "furniture",
    "ItemName": "Design Toscano Maharajah Elephants Indian Decor Upholstered Footstool, 13 Inch, Polyresin, Woodtone",
    "Price": 101.95,
    "Rating": 4.20,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/66/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/66/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/66/view2.jpg'],
    "Video": "https://www.amazon.com/Design-Toscano-Maharajah-Elephants-Upholstered/dp/B003M0HUVC/ref=sr_1_7?keywords=middle+eastern+furniture&qid=1566492922&s=gateway&sr=8-7"
  },
  {
    "ProductId": 67,
    "Category": "furniture",
    "ItemName": "Fatboy Flying Carpet, Casablanca, Turquoise",
    "Price": 189.99,
    "Rating": 1,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/67/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/67/view1.jpg'],
    "Video": null
  },
  {
    "ProductId": 68,
    "Category": "furniture",
    "ItemName": "Fatboy Non Flying Carpet/Rugs, Small, Cardamom",
    "Price": 110.62,
    "Rating": 3.8,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/68/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 69,
    "Category": "furniture",
    "ItemName": "16th Century Knight Fluted Suit of Armor Display",
    "Price": 3119.95,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/69/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 70,
    "Category": "furniture",
    "ItemName": "Ebros Medieval Renaissance Dungeon Dragon Head Scepter Orb Torch 23.5in Long with Color Changing LED Light and Wall Mounted Dragon Claws Holder Wizards and Dragons Sorcery'",
    "Price": 39.98,
    "Rating": 4.1,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/70/view7.jpg'],
    "Video": null
  },
  {
    "ProductId": 71,
    "Category": "furniture",
    "ItemName": "Alternative Imagination Carved Wooden Pentagram Altar Table - Painted Black with Gold Design -6 Inches Wide, 4 Inches Tall",
    "Price": 24.99,
    "Rating": 3.7,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/71/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/71/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/71/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/71/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/71/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/71/view5.jpg'],
    "Video": null
  },
  {
    "ProductId": 72,
    "Category": "furniture",
    "ItemName": "Magic Rugs Charming Traditional Palace Size Kashan Persian Style Rug Oriental Area Carpet 10X15",
    "Price": 2717,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/72/view8.jpg'],
    "Video": null
  },
  {
    "ProductId": 73,
    "Category": "furniture",
    "ItemName": "Lord Worthington Throne Hand Carved Wing Back Tobacco Colored Arm Chair (The Digital Angel)",
    "Price": 1138.86,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/73/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 74,
    "Category": "furniture",
    "ItemName": "Cyan Design Wall Mirror Inglewood Ancient White Mirrored Glass New",
    "Price": 1075,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/74/view0.jpg'],
    "Video": null
  },
  {
    "ProductId": 75,
    "Category": "furniture",
    "ItemName": "TecBillion Warm Flannel Blanket, Occult Decor, for Folding Bed Crib,  Stroller, Travel, Couch and Bed, Minimalist Ancient Magic Symbol with Dated Shape",
    "Price": 137.99,
    "Rating": 4,
    "Photo": ['https://shazamazon.s3.us-east-2.amazonaws.com/furniture/75/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/75/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/75/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/furniture/75/view3.jpg'],
    "Video": null
  },
  {
    "ProductId": 76,
    "Category": "lamps",
    "ItemName": "SUNMALL Vintage Legend Aladdin Lamp Magic Genie Wishing Light, Collectable Rare Classic Arabian Costume Props Lamp Tabletop Decor Crafts for Home/Wedding Decoration&Gift for Party/Halloween/Birthday",
    "Price": 16.66,
    "Rating": 4.3,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+1/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+1/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+1/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+1/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+1/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+1/view5.jpg' ],
    "Video": null
  },
  {
    "ProductId": 77,
    "Category": "lamps",
    "ItemName": "WEISIPU Aladdin Magic Genie Lamps - Vintage Incense Burners Magic Genie Light Lamp for Home Table Decoration/Party/Halloween/Birthday (Gold-Blue)",
    "Price": 16.99,
    "Rating": 4.7,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/Genie+Lamp+2/view8.jpg' ],
    "Video": null
  },
  {
    "ProductId": 78,
    "Category": "lamps",
    "ItemName": "Led Rainbow Projector - Rainbow Projector LED Light Reflection - Rainbow Maker for Children Gift",
    "Price": 19.99,
    "Rating": 4.2,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/RainbowLamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/RainbowLamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/RainbowLamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/RainbowLamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/RainbowLamp/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/RainbowLamp/view5.jpg' ],
    "Video": null
  },
  {
    "ProductId": 79,
    "Category": "lamps",
    "ItemName": "Brightech Eclipse LED Floor Lamp - Super Bright & Dimmable Modern Light For Living Room Or Office Tasks - Contemporary, Tall Standing Pole Lamps - Cool Look, Adjustable-Position Ring Lighting - Black",
    "Price": 89.99,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/HoopLamp/view8.jpg' ],
    "Video": null
  },
  {
    "ProductId": 80,
    "Category": "lamps",
    "ItemName": "Sound Activated Party Lights with Remote Control Disco lights Dj Lighting SOLMORE Disco Ball 9 Colors Strobe Lamp 7 Modes Stage Par Light Club Party Gift Kids Birthday Wedding Home Karaoke Dance",
    "Price": 19.39,
    "Rating": 4.8,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DiscoLamp/view8.jpg' ],
    "Video": null
  },
  {
    "ProductId": 81,
    "Category": "lamps",
    "ItemName": "BOSQUEEN Cartoon Book Lamp, Novelty LED Night Light for Kids，Folding Table Lamp for Birthday Home Decor Bathroom Office Meeting Room Living Room (Cat)",
    "Price": 18.69,
    "Rating": 5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/CatLamp/view6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 82,
    "Category": "lamps",
    "ItemName": "Creative 3D Glow LED Night Light Secret Magic Lamp 7 Colors Optical Illusion Lamp Touch Sensor Perfect for Home Party Festival Decor Great Gift Idea (Magic Lamp)",
    "Price": 20.99,
    "Rating": 4.2,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views6.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views7.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonAladdin/views8.jpg' ],
    "Video": null
  },
  {
    "ProductId": 83,
    "Category": "lamps",
    "ItemName": "Bedside Table Lamp, Aooshine Minimalist Solid Wood Table Lamp Bedside Desk Lamp With Square Flaxen Fabric Shade for Bedroom, Dresser, Living Roo, Kids Room, College Dorm, Coffee Table, Bookcase",
    "Price": 20.99,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/BasicLamp/view6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 84,
    "Category": "lamps",
    "ItemName": "Bedoo Pressie Birthday Gift Delightful Cat Lamp Magic 3D Illusion 7 Colors Touch Switch USB Insert LED Light Christmas Present and Party Decoration",
    "Price": 18.55,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/NeonCatLamp/view6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 85,
    "Category": "lamps",
    "ItemName": "AUSAYE LED Night Light Plug in Lamp Mushroom Night Light 7-Color Changing Magic Mini Pretty Mushroom-Shaped Night Lights for Adults Kids NightLight",
    "Price": 7.99,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/MushroomLamp6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 86,
    "Category": "lamps",
    "ItemName": "YUNNI Plasma Ball Light 6 Inch Plasma Lamp, Lightning Ball Touch & Sound Sensitive, Glass Magic Ball Lamp Nebula Sphere Globe Novelty Toy for Decorations/Kids/Bedroom/Gifts (AC Powered, Plug-in)",
    "Price": 24.96,
    "Rating": 4.3,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp5.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/ElectricLamp6.jpg' ],
    "Video": null
  },
  {
    "ProductId": 87,
    "Category": "lamps",
    "ItemName": "Lava the Original 16.3-Inch Silver Base Lamp with Yellow Wax in Purple Liquid",
    "Price": 39.46,
    "Rating": 3.6,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/LavaLamp0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/LavaLamp1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 88,
    "Category": "lamps",
    "ItemName": "Aladdin Disney Magic Genie Lamp, Lights Up & Shakes!",
    "Price": 17.29,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DisneyLamp0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DisneyLamp1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DisneyLamp2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DisneyLamp3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DisneyLamp4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/DisneyLamp5.jpg' ],
    "Video": null
  },
  {
    "ProductId": 89,
    "Category": "lamps",
    "ItemName": "Aladdin Lamp Fuel - 64oz",
    "Price": 15.99,
    "Rating": 4.8,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/LampFuel.jpg' ],
    "Video": null
  },
  {
    "ProductId": 90,
    "Category": "lamps",
    "ItemName": "Feuerhand Hurricane Lantern - German Made Oil Lamp - 10in with Care Pack (Black)",
    "Price": 49.97,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/GasLamp0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/GasLamp1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lamps/GasLamp2.jpg' ],
    "Video": null
  },
  {
    "ProductId": 91,
    "Category": "lotr",
    "ItemName": "J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings",
    "Price": 25,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lotr_hobbit_bookcol/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lotr_hobbit_bookcol/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lotr_hobbit_bookcol/view2.jpg' ],
    "Video": null
  },
  {
    "ProductId": 92,
    "Category": "lotr",
    "ItemName": "Lord of the Rings: The Fellowship of the Ring - Extended Edition Blu-ray",
    "Price": 24.99,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/fotr_bluray/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/fotr_bluray/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 93,
    "Category": "lotr",
    "ItemName": "Lord Of The Rings - The Two Towers Theatrical Version",
    "Price": 9.46,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/ttt_bluray/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 94,
    "Category": "lotr",
    "ItemName": "Lord Of The Rings Poster - Sam Gamgee Potato Definition Poster - Boil Em Mash Em Taters - 11x14 Unframed Print - Great Gift For Lord Of The Rings And Hobbit Fans",
    "Price": 14.99,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/potato_poster/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/potato_poster/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/potato_poster/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/potato_poster/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/potato_poster/view4.jpg' ],
    "Video": null
  },
  {
    "ProductId": 95,
    "Category": "lotr",
    "ItemName": "Warner Brothers The Hobbit, Middle Earth Woven Tapestry Throw Blanket - 48 x 60 - Multi Color",
    "Price": 39.99,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/me_tapestry/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/me_tapestry/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/me_tapestry/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/me_tapestry/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/me_tapestry/view4.jpg' ],
    "Video": null
  },
  {
    "ProductId": 96,
    "Category": "lotr",
    "ItemName": "Fantasy Flight Games LOTR: Journeys in Middle-Earth",
    "Price": 77.99,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/flightgame_jme/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 97,
    "Category": "lotr",
    "ItemName": "Funko POP Movies The Lord of The Rings Balrog 6in Action Figure",
    "Price": 13.13,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/funko_balrog/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/funko_balrog/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 98,
    "Category": "lotr",
    "ItemName": "Lord of the Rings Color Changing Glass",
    "Price": 21.19,
    "Rating": 5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lotr_ccglass/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lotr_ccglass/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 99,
    "Category": "lotr",
    "ItemName": "LEGO Lord of the Rings - Xbox 360",
    "Price": 17.71,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lego_xbox/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lego_xbox/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lego_xbox/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lego_xbox/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lego_xbox/view4.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/lego_xbox/view5.jpg' ],
    "Video": null
  },
  {
    "ProductId": 100,
    "Category": "lotr",
    "ItemName": "KAFpipeWorkshop Tobacco pipe Gandalf pipe Wooden pipe Tobacco Smoking pipe Lord of the Rings pipe Churchwarden pipe Tree of Gondor",
    "Price": 35,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/pipe/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/pipe/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/pipe/view2.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/pipe/view3.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/pipe/view4.jpg' ],
    "Video": null
  },
  {
    "ProductId": 101,
    "Category": "lotr",
    "ItemName": "Lord of the Rings Green Dragon Tavern T Shirt",
    "Price": 21.99,
    "Rating": 5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/gd_shirt/view0.jpg' ],
    "Video": null
  },
  {
    "ProductId": 102,
    "Category": "lotr",
    "ItemName": "The Art of The Lord of the Rings by J.R.R. Tolkien Hardcover – October 13, 2015",
    "Price": 29.07,
    "Rating": 4.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/artbook/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/artbook/view1.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/artbook/view2.jpg' ],
    "Video": null
  },
  {
    "ProductId": 103,
    "Category": "lotr",
    "ItemName": "The Lord Of The Rings: The Fellowship Of The Ring - The Complete Recordings Vinyl",
    "Price": 891.36,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/soundtracks_vinyl/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/soundtracks_vinyl/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 104,
    "Category": "lotr",
    "ItemName": "Funko Pop! Rides: Lord of The Rings - Witch King with Fellbeast",
    "Price": 22.88,
    "Rating": 4,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/funko_wk/view0.jpg', 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/funko_wk/view1.jpg' ],
    "Video": null
  },
  {
    "ProductId": 105,
    "Category": "lotr",
    "ItemName": "Lord of The Rings Glamdring Sword from The Hobbit",
    "Price": 195,
    "Rating": 3.5,
    "Photo": [ 'https://shazamazon.s3.us-east-2.amazonaws.com/lotr/sword/view0.jpg' ],
    "Video": null
  }
];

const toDb = (obj => {
  axios({
    method: 'post',
    url: 'http://localhost:4444/item/', 
    data: obj
  })
    .then(data => 
      console.log('success!')
    )
    .catch(err => 
      console.error(err)
    );
});

data.forEach(object => {
  toDb(object);
});

