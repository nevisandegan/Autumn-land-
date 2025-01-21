import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            prefetch={false}
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li className="flex-1">
          {session && session.user.name ? (
            <div className="h-10 w-10 flex justify-center items-center gap-2 ml-20">
              <img
                src={session.user.image}
                alt={"profile"}
                className="rounded-full"
              />
              <p className="hover:text-accent-400 transition-colors">
                {session.user.name}
              </p>
            </div>
          ) : (
            <Link
              prefetch={false}
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
