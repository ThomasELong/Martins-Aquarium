


const fishCollection = [
    {
        name: "Betty",
        length: "2 ft",
        species: "Longtooth Barracuda",
        food: ["Squid"],
        harvested: "Cumberland River",
    },
    {
        name: "Nemo",
        length: "2 in",
        species: "Clownfish",
        food: ["Plankton"],
        harvested: "Great Barrier Reef",
    },
    {
        name: "Dory",
        length: "4 in",
        species: "Blue Tang",
        food: ["Clownfish"],
        harvested: "New Zealand Sea",
    },
    {
        name: "Harold",
        length: "1 ft",
        species: "Longtooth Barracuda",
        food: ["Squid"],
        harvested: "Cumberland River",
    },
    {
        name: "Patricia",
        length: "2 in",
        species: "Clownfish",
        food: ["Plankton"],
        harvested: "Great Barrier Reef",
    },
    {
        name: "Mike",
        length: "4 in",
        species: "Blue Tang",
        food: ["Clownfish"],
        harvested: "New Zealand Sea",
    }
]


/*The below is a module, it's kinda dumb and only works on the details in it. 
It does not return the const, it returns the array held in the const. */
export const useFish = () => {
    return fishCollection
}

