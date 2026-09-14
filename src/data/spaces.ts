export interface Space {
    id: string;
    title: string;
    description: string;
    image: string;
    size: "large" | "wide" | "tall" | "small";
}

export const spaces: Space[] = [
    {
        id: "1",
        title: "The Work Tables",
        description: "Fast wifi, plenty of outlets, and room to spread out your laptop and notes.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
        size: "large",
    },
    {
        id: "2",
        title: "The Coffee Bar",
        description: "Single-origin espresso, pour-overs, and oat milk that actually froths right.",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900",
        size: "tall",
    },
    {
        id: "3",
        title: "Meeting Room A",
        description: "Bookable by the hour. Whiteboard, screen, and a door that actually closes.",
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900",
        size: "wide",
    },
    {
        id: "4",
        title: "The Lounge",
        description: "Couches for when your brain needs to slow down for a minute.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
        size: "small",
    },
    {
        id: "5",
        title: "Grilled Cheese & Mushroom",
        description: "Our most-ordered sandwich. Comes with a side of not judging you for the 3pm order.",
        image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=900",
        size: "small",
    },
];