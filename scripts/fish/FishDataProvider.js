const fishCollection = [
    {
        name: "Betty",
        size: "2 ft",
        species: "Longtooth Barracuda",
        food: ["Squid"],
        location: "Cumberland River",
        image: "https://imgc.allpostersimages.com/img/print/u-g-Q1065730.jpg?w=550&h=550&p=0"
    },
    {
        name: "Nemo",
        size: "2 in",
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef",
        image: "https://us.123rf.com/450wm/tomruethai/tomruethai1604/tomruethai160400034/57912485-betta-fish-half-moon-or-siamese-fighting-fish-on-black-background.jpg?ver=6"
    },
    {
        name: "Dory",
        size: "4 in",
        species: "Blue Tang",
        food: ["Clownfish"],
        location: "New Zealand Sea",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9114305.jpg"
    },
    {
        name: "Harold",
        size: "1 ft",
        species: "Longtooth Barracuda",
        food: ["Squid"],
        location: "Cumberland River",
        image: "https://img4.goodfon.com/wallpaper/nbig/9/81/chiornyi-fon-ryba-rybka.jpg"
    },
    {
        name: "Patricia",
        size: "2 in",
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef",
        image: "https://us.123rf.com/450wm/izanbar/izanbar1409/izanbar140903607/31626543-clown-red-fish-in-red-anemone-in-the-black-background.jpg?ver=6"
    },
    {
        name: "Mike",
        size: "4 in",
        species: "Blue Tang",
        food: ["Clownfish"],
        location: "New Zealand Sea",
        image: "https://wallpapershome.com/images/wallpapers/surgeonfish-3840x2160-water-aquarium-reef-animals-blue-yellow-fish-1289.jpg"
    }
]


/*The below is a module, it's kinda dumb and only works on the details in it. 
It does not return the const, it returns the array held in the const. */
export const useFish = () => {
    return fishCollection
}

