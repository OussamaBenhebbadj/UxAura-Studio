export type ProjectCategory = "web" | "mobile";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: "sera" | "web" | "mobile";
  link: string;
};
