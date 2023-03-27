import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Try again?</Link>
    </>
  );
}
