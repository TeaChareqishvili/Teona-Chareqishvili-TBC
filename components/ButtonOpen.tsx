import Link from "next/link";

export default function ButtonOpen() {
  return (
    <>
      <Link href="/homePageLayout" className="text-white">
        Click
      </Link>
      <h1 className="intro">TEXT</h1>
    </>
  );
}
