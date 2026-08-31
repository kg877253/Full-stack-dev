export default async function Page({ params }) {
    
    const { slug } = await params
    let a = await params
    console.log(a)
    return <div>this is a about test params slug: {slug} </div>
}