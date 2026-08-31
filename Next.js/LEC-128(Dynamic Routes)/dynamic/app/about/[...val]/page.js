export default async function Page({ params }) {

    //when we want more than one parameter we can use [...val] in the file name and then we can get the values in the params object as an array

    //but when we want only one parameter we can use [val] in the file name and then we can get the value in the params object as a string 

    const { val } = await params;
    //const slug = Array.isArray(val) ? val.join('/') : val;

    console.log(val)
    
    const value = val.join('/')
    return <div>this is a about test params slug: {value}</div>;
}