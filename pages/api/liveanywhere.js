
  const handler = (req, res) => {
      res.status(200);
      res.json([
        {
          id:1,
          src: "liveanywhere1.webp",
          caption: "Outdoor getaways",
        },
        { id: 2,
          src: "liveanywhere2.webp",
          caption: "Unique stays",
        },
        { id: 3,
          src: "liveanywhere3.webp",
          caption: "Entire home",
        },
        { id: 4,
          src: "liveanywhere4.webp",
          caption: "Pets allowed",
        },
      ]);
  }

export default handler;