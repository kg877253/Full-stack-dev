export default function Page({ params }) {
  const { val } = params;
  const slug = Array.isArray(val) ? val.join('/') : val;

  return <div>this is a about test params slug: {slug}</div>;
}