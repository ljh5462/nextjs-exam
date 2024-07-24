import { Metadata } from "next";

export const metadata: Metadata = {
    title : "Not Fount",
    description : "desc"
  };

export default function NotFound () {
    return <h1>Not Found!</h1>
}