const postsList = [
  {
    id: "1",
    title: "Forest",
    img: require("../assets/images/img1.png"),
    commentsCount: 0,
    likesCount: 0,
    location: "Ukraine",
  },
  {
    id: "2",
    title: "Sunset on the Black Sea",
    img: require("../assets/images/img2.png"),
    commentsCount: 3,
    comments: [
      {
        id: "0",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 June, 2020 | 08:40",
        isOwner: false,
        ownerAvatar: require("../assets/images/ava-plug.png"),
      },
      {
        id: "1",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 June, 2020 | 09:14",
        isOwner: true,
        ownerAvatar: require("../assets/images/photo-plug.png"),
      },
      {
        id: "2",
        text: "Thank you! That was very helpful!",
        date: "09 June, 2020 | 09:20",
        isOwner: false,
        ownerAvatar: require("../assets/images/ava-plug.png"),
      },
      {
        id: "3",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 June, 2020 | 08:40",
        isOwner: false,
        ownerAvatar: require("../assets/images/ava-plug.png"),
      },
      {
        id: "4",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 June, 2020 | 09:14",
        isOwner: true,
        ownerAvatar: require("../assets/images/photo-plug.png"),
      },
      {
        id: "5",
        text: "Thank you! That was very helpful!",
        date: "09 June, 2020 | 09:20",
        isOwner: false,
        ownerAvatar: require("../assets/images/ava-plug.png"),
      },
    ],
    likesCount: 200,
    location: "Ukraine",
  },
  {
    id: "3",
    title: "Old house in Venice",
    img: require("../assets/images/img3.png"),
    commentsCount: 50,
    likesCount: 200,
    location: "Italy",
  },
];

export default postsList;
