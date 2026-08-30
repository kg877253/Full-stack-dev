import Image from "next/image";
import fs from "fs/promises";
export default function Home() {

  const submitAction = async (e) => {
    "use server"
    const name = e.get("namer");
    const address = e.get("adder");
    await fs.writeFile("kartik.txt", `Name: ${name}, Address: ${address}`);
    console.log("Saved:", { name, address });
  }
  return (
    <div className="w-2/3  p-4 m-auto mt-4 rounded-lg text-xl">
      <form action={submitAction} >
        <div>
          <label htmlFor="namer">Name: </label>
          <input className="bg-white text-black" type="text" id="namer" name="namer" />
        </div>
        <div>
          <label htmlFor="adder">Address: </label>
          <input className="bg-white text-black" type="text" id="adder" name="adder" />
        </div>
        <div>
          <input type="submit" value="Submit" className="border-2 border-amber-200 p-3" />
        </div>
      </form>

    </div>
  );
}
