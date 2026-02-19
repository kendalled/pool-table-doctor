<template>
  <div class="space-y-6 max-w-7xl px-6 sm:px-8 mt-6 w-full mx-auto">
    <Head>
      <Title>Pool Table Felt Replacement in Orlando, FL | Pool Table Doctor</Title>
      <Meta name="description" content="Pool table felt replacement in Orlando with Championship and Simonis options. Professional refelting, smooth play, and color choices." />
    </Head>
    <section class="bg-white rounded-md p-6 sm:p-8">
      <h1 class="text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 mb-3">Pool Table Felt Replacement (Refelting) in Orlando</h1>
      <p class="text-gray-600">
        This service is for homeowners and businesses who want dependable cloth replacement, and professional stretching and leveling helps your table play smooth and true.
      </p>
      <p class="text-gray-600 mt-3">
        We offer both Championship and Simonis cloth options. We have a wide variety of colors to choose from, so you can find the perfect one for your table.
      </p>
    </section>
    <ClothPicker :cloths="championshipCloth" prefix="/felt/championship/" label="Championship Cloths" desc="Championship Cloth is the standard for every home pool table. This felt brand is perfect for recreational use and lasts longer than normal budget cloths, making it much better than other companies' cheaper alternatives. Championship also provides many cloth colors to choose from, letting you express your vision on your table." />
    <ClothPicker :cloths="simonisCloth" prefix="/felt/simonis/" label="Simonis Cloths" desc="Simonis Cloth is an alternative option for your pool tables that has a higher thread count. This cloth is the standard for competitive pool tables and players. With a wide variety of cloth colors to choose from, it has never been easier to take your pool table to tournament level. Try Simonis cloth to play like the pros." />
  </div>
</template>

<script>
export default {
  data () {
    return {
      championshipCloth: [
    {
        name: 'Red',
        img: {
            src: 'red.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Burgundy',
        img: {
            src: 'burgundy.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Titanium',
        img: {
            src: 'titanium.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Charcoal',
        img: {
            src: 'charcoal.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Steel Grey',
        img: {
            src: 'steelGrey.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Black',
        img: {
            src: 'black.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Purple',
        img: {
            src: 'purple.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Olive',
        img: {
            src: 'olive.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Taupe',
        img: {
            src: 'taupe.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Golden',
        img: {
            src: 'golden.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Khaki',
        img: {
            src: 'khaki.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Camel',
        img: {
            src: 'camel.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Brown',
        img: {
            src: 'brown.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Basic Green',
        img: {
            src: 'basicGreen.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Championship Green',
        img: {
            src: 'championshipGreen.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Dark Green',
        img: {
            src: 'darkGreen.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bottle Green',
        img: {
            src: 'bottleGreen.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'English Green',
        img: {
            src: 'englishGreen.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Aztec',
        img: {
            src: 'aztec.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Brick',
        img: {
            src: 'brick.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Navy',
        img: {
            src: 'navy.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Wine',
        img: {
            src: 'wine.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Academy Blue',
        img: {
            src: 'academyBlue.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Euro Blue',
        img: {
            src: 'euroBlue.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Electric Blue',
        img: {
            src: 'electricBlue.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bright Pink',
        img: {
            src: 'brightPink.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bright Red',
        img: {
            src: 'brightRed.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bright Orange',
        img: {
            src: 'brightOrange.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bright Gold',
        img: {
            src: 'brightGold.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bright Lime',
        img: {
            src: 'brightLime.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Bright White',
        img: {
            src: 'brightWhite.jpg',
            width: 540,
            height: 675
        },
    },
    {
        name: 'Midnight Blue',
        img: {
            src: 'midnightBlue.jpg',
            width: 540,
            height: 675
        },
    }
],
      simonisCloth: [
    {
        name: 'Simonis Green',
        img: {
            src: 'simonisGreen.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Marine Blue',
        img: {
            src: 'marineBlue.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Black',
        img: {
            src: 'black.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Espresso',
        img: {
            src: 'espresso.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Wine',
        img: {
            src: 'wine.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'English Green',
        img: {
            src: 'englishGreen.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Royal Blue',
        img: {
            src: 'royalBlue.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Slate Grey',
        img: {
            src: 'slateGrey.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Mocha',
        img: {
            src: 'mocha.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Burgundy',
        img: {
            src: 'burgundy.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Spruce',
        img: {
            src: 'spruce.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Electric Blue',
        img: {
            src: 'electricBlue.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Olive',
        img: {
            src: 'olive.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Camel',
        img: {
            src: 'camel.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Red',
        img: {
            src: 'red.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Dark Green',
        img: {
            src: 'darkGreen.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Tournament Blue',
        img: {
            src: 'tournamentBlue.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Gold',
        img: {
            src: 'gold.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Purple',
        img: {
            src: 'purple.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Petroleum Blue',
        img: {
            src: 'petroleumBlue.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Powder Blue',
        img: {
            src: 'powderBlue.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Burnt Orange',
        img: {
            src: 'burntOrange.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Fushsia',
        img: {
            src: 'fushsia.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Blue Green',
        img: {
            src: 'blueGreen.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Grey',
        img: {
            src: 'grey.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Chartreuse',
        img: {
            src: 'chartreuse.jpg',
            width: 720,
            height: 720
        },
    },
    {
        name: 'Dusty Pink',
        img: {
            src: 'dustyPink.jpg',
            width: 720,
            height: 720
        },
    }
]
    }
  }
}
</script>
