"use server"
import fs from "fs/promises";

export const submitAction = async (e) => {
    const name = e.get("namer");
    const address = e.get("adder");
    await fs.appendFile("kartik.txt", `Name: ${name}, Address: ${address}\n`); 
    console.log("Saved:", { name, address });
  }