


    const handler = (req, res) => {
        res.status(200);
        res.json([
            {
                id:1,
                url: '/s/experiences/online',
                img:"d1.webp",
                heading:"Featured collection: Wanderlust",
                subheading:"Travel from home with Online Experiences.",
            },
    
            {
                id:2,
                url: '#',
                img:"d2.webp",
                heading:"Featured collection: Wanderlust",
                subheading:"Travel from home with Online Experiences.",
            },
    
            {
                id:3,
                url: '#',
                img:"d3.webp",
                heading:"Featured collection: Wanderlust",
                subheading:"Travel from home with Online Experiences.",
            },
        ]);
    }

    export default handler;