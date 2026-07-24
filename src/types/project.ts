export type ProjectCategory = "web" | "mobile";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  icon: "sera" | "web" | "mobile";
  link: string;
};
