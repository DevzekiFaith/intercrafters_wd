import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function notFoundPage() {
  //   return (
  //     <div>
  //       redirect("/")
  //       <h1>This page is Not found</h1>
  //       <Link href="/">
  //         <button>Go back to Home Page</button>
  //       </Link>
  //     </div>
  //   );
  redirect("/");
}
