import { ReactNode } from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect, RedirectType } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

if(session) redirect("/");
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image
              src="/public/icons/logo.svg"
              alt="logo"
              width={37}
              height={37}
            />
            <h1 className="text-2xl font-semibold text-white">Panne</h1>
          </div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image src="/public/images/auth-illustration.png"
        alt="auth illustration"
        height={1000}
        width={1000}
        className="size-full object-cover"/>

      </section>
        </main>
  );
};

export default Layout;
