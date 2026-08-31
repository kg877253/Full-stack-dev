export default function Page({ params }) {
  const { slug } = params;
  let lang = ["python", "javascript", "java", "cpp", "c#", "ruby", "php", "go", "swift", "kotlin", "typescript"];

  if (lang.includes(slug)) {
    return <div>My Post: {slug}</div>;
  }

  return <div className="bg-amber-100 text-black h-[100vh] w-full text-7xl text-center content-center font-bold">Post not found</div>;
}