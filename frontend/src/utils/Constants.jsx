export const Backend_Url="http://127.0.0.1:3030";

export const Categories=[
    "Business",
    "Design",
    "Development",
    "Finance & Accounting",
    "Health & Fitness",
    "IT & Software",
    "Lifestyle",
    "Marketing",
    "Music",
    "Office Productivity",
    "Personal Development",
    "Photography & Video",
    "Teaching & Academics"
  ]




 export  function isValidMongoId(id) {
    return /^[a-f\d]{24}$/i.test(id);
}
