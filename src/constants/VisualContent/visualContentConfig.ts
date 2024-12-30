export interface ContentCardDetails {
  title: string;
  buttonText: string;
  hashtags: string[];
  postDate: string;
  readTime: string;
  thumbnailUrl: string;
  contentSlides: string[];
}

export const contentPosts: ContentCardDetails[] = [
  {
    title: "Strategy Design Pattern",
    buttonText: "View",
    hashtags: [""],
    postDate: "Oct 22",
    readTime: "4m",
    thumbnailUrl: "/Content/strategy_design_pattern/visual_05.png",
    contentSlides: [
      "/Content/strategy_design_pattern/visual_01.png",
      "/Content/strategy_design_pattern/visual_02.png",
      "/Content/strategy_design_pattern/visual_03.png",
      "/Content/strategy_design_pattern/visual_04.png",
      "/Content/strategy_design_pattern/visual_05.png",
    ],
  },
];

// can use the idea of base url as well.
