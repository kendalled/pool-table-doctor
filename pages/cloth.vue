<template>
  <div class="space-y-6 max-w-7xl px-6 sm:px-8 mt-6 w-full mx-auto">
    <ClothPicker :cloths="championshipCloth" prefix="/felt/championship/" label="Championship Cloths" desc="Championship Cloth is the standard for every home pool table. This felt brand is perfect for recreational use and lasts longer than normal budget cloths, making it much better than other companies' cheaper alternatives. Championship also provides many cloth colors to choose from, letting you express your vision on your table." />
    <ClothPicker :cloths="simonisCloth" prefix="/felt/simonis/" label="Simonis Cloths" desc="Simonis Cloth is an alternative option for your pool tables that has a higher thread count. This cloth is the standard for competitive pool tables and players. With a wide variety of cloth colors to choose from, customizing your table in your images couldn’t be easier." />
  </div>
</template>

<script>
export default {
  data () {
    return {
      simonisCloth: [
        {
          name: 'Simonis Green',
          img: 'simonisGreen.jpg',
        },
        {
          name: 'Marine Blue',
          img: 'marineBlue.jpg',
        },
        {
          name: 'Black',
          img: 'black.jpg',
        },
        {
          name: 'Espresso',
          img: 'espresso.jpg',
        },
        {
          name: 'Wine',
          img: 'wine.jpg',
        },
        {
          name: 'English Green',
          img: 'englishGreen.jpg',
        },
        {
          name: 'Royal Blue',
          img: 'royalBlue.jpg',
        },
        {
          name: 'Slate Grey',
          img: 'slateGrey.jpg',
        },
        {
          name: 'Mocha',
          img: 'mocha.jpg',
        },
        {
          name: 'Burgundy',
          img: 'burgundy.jpg',
        },
        {
          name: 'Spruce',
          img: 'spruce.jpg',
        },
        {
          name: 'Electric Blue',
          img: 'electricBlue.jpg',
        },
        {
          name: 'Olive',
          img: 'olive.jpg',
        },
        {
          name: 'Camel',
          img: 'camel.jpg',
        },
        {
          name: 'Red',
          img: 'red.jpg',
        },
        {
          name: 'Dark Green',
          img: 'darkGreen.jpg',
        },
        {
          name: 'Tournament Blue',
          img: 'tournamentBlue.jpg',
        },
        {
          name: 'Gold',
          img: 'gold.jpg',
        },
        {
          name: 'Purple',
          img: 'purple.jpg',
        },
        {
          name: 'Petroleum Blue',
          img: 'petroleumBlue.jpg',
        },
        {
          name: 'Powder Blue',
          img: 'powderBlue.jpg',
        },
        {
          name: 'Burnt Orange',
          img: 'burntOrange.jpg',
        },
        {
          name: 'Fushsia',
          img: 'fushsia.jpg',
        },
        {
          name: 'Blue Green',
          img: 'blueGreen.jpg',
        },
        {
          name: 'Grey',
          img: 'grey.jpg',
        },
        {
          name: 'Chartreuse',
          img: 'chartreuse.jpg',
        },
        {
          name: 'Dusty Pink',
          img: 'dustyPink.jpg',
        }
      ],
      championshipCloth: [
      {
        name: 'Red',
        img: 'red.jpg',
      },
      {
        name: 'Burgundy',
        img: 'burgundy.jpg',
      },
      {
        name: 'Titanium',
        img: 'titanium.jpg',
      },
      {
        name: 'Charcoal',
        img: 'charcoal.jpg',
      },
      {
        name: 'Steel Grey',
        img: 'steelGrey.jpg',
      },
      {
        name: 'Black',
        img: 'black.jpg',
      },
      {
        name: 'Purple',
        img: 'purple.jpg',
      },
      {
        name: 'Olive',
        img: 'olive.jpg',
      },
      {
        name: 'Taupe',
        img: 'taupe.jpg',
      },
      {
        name: 'Golden',
        img: 'golden.jpg',
      },
      {
        name: 'Khaki',
        img: 'khaki.jpg',
      },
      {
        name: 'Camel',
        img: 'camel.jpg',
      },
      {
        name: 'Brown',
        img: 'brown.jpg',
      },
      {
        name: 'Basic Green',
        img: 'basicGreen.jpg',
      },
      {
        name: 'Championship Green',
        img: 'championshipGreen.jpg',
      },
      {
        name: 'Dark Green',
        img: 'darkGreen.jpg',
      },
      {
        name: 'Bottle Green',
        img: 'bottleGreen.jpg',
      },
      {
        name: 'English Green',
        img: 'englishGreen.jpg',
      },
      {
        name: 'Aztec',
        img: 'aztec.jpg',
      },
      {
        name: 'Brick',
        img: 'brick.jpg',
      },
      {
        name: 'Navy',
        img: 'navy.jpg',
      },
      {
        name: 'Wine',
        img: 'wine.jpg',
      },
      {
        name: 'Academy Blue',
        img: 'academyBlue.jpg',
      },
      {
        name: 'Euro Blue',
        img: 'euroBlue.jpg',
      },
      {
        name: 'Electric Blue',
        img: 'electricBlue.jpg',
      },
      {
        name: 'Bright Pink',
        img: 'brightPink.jpg',
      },
      {
        name: 'Bright Red',
        img: 'brightRed.jpg',
      },
      {
        name: 'Bright Orange',
        img: 'brightOrange.jpg',
      },
      {
        name: 'Bright Gold',
        img: 'brightGold.jpg',
      },
      {
        name: 'Bright Lime',
        img: 'brightLime.jpg',
      },
      {
        name: 'Bright White',
        img: 'brightWhite.jpg',
      },
      {
        name: 'Midnight Blue',
        img: 'midnightBlue.jpg',
      }
      ]
    }
  }
}
</script>
