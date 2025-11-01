"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    
    <div>
      <button onClick={()=> router.push("/blog/rajesh")}> Visist slug</button>

    </div>
  );
}
