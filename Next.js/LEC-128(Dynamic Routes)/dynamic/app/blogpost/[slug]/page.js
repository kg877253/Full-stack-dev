export default async function Page({ params }) {
    const { slug } = await params
    let lang = ["python", "javascript", "java", "cpp", "c#", "ruby", "php", "go", "swift", "kotlin", "typescript"]
    //we can do this also 
    //   return <div>My Post: {slug}</div>

    //or this if we have to give blog only on some particular languages or things
    if (lang.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    else {
        return <div className="bg-amber-100 text-black h-[100vh] w-full text-7xl text-center content-center font-bold">Post not found</div>
    }
}