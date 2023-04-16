import Image from "next/image";
import { Input } from "../../components/input";
import Link from "next/link";
export function FormSignIn() {
  return (
    <>
      <div>
        <Image src={"/logo.svg"} width={90} height={56} alt="logo" />
        <h1 className="text-center font-bold text-lg mt-4 ">Sign In</h1>
      </div>
      <form className="w-full flex flex-col gap-2">
        <Input label="Email" placeholder="e-mail" />
        <Input label="Senha" placeholder="senha" isPassword />

        <label>
          <input type="checkbox" name="" id="" className="mr-2 text-primary" />
          By creating an account you agree to the{" "}
          <a href="/" className="text-primary font-bold">
            terms of use
          </a>{" "}
          and our{" "}
          <a href="/" className="text-primary font-bold">
            terms of use
          </a>
          .
        </label>

        <button className="bg-primary hover:bg-primary/80 h-10 rounded-lg mt-4">
          Login In
        </button>
      </form>
      <p className="mt-2">
        Don’t have account yet?{" "}
        <Link
          href={"/module/register"}
          className="text-primary font-bold cursor-pointer hover:text-secondary "
        >
          New Account
        </Link>
      </p>
    </>
  );
}
