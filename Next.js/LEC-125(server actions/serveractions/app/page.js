"use client"
import { submitAction } from "../actions/form";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="w-2/3  p-4 m-auto mt-4 rounded-lg text-2xl">
      <form  action={submitAction} className="flex flex-col gap-4">
        <div>
          <label htmlFor="namer" >Name: </label>
          {/* required helps in validating the form before submission. It ensures that the user cannot submit the form without filling out this field. If the user tries to submit the form without entering a name, the browser will display a validation message prompting them to fill in the required field. */}
          <input required={true} minLength={2} className="bg-white text-black rounded-2xl p-2" type="text" id="namer" name="namer" />
        </div>
        <div>
          <label htmlFor="adder">Address: </label>
          <input required={true} className="bg-white text-black rounded-2xl p-2" type="text" id="adder" name="adder" />
        </div>
        <div>
          <input type="submit" value="Submit" className="border-2 border-amber-200 p-2 bg-blue-200 text-violet-700" />
        </div>
      </form>

    </div>
  );
}
