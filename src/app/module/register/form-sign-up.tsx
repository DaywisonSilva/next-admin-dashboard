import Image from "next/image";
import { Input } from "../../components/input";
import Link from "next/link";
export function FormSignUp() {
  return (
    <>
      <div>
        <Image src={"/logo.svg"} width={90} height={56} alt="logo" />
        <h1 className="text-center font-bold text-lg mt-4 ">Sign Up</h1>
      </div>
      <form className="w-full flex flex-col gap-2">
        <Input label="Nome" placeholder="nome" />
        <Input label="Email" placeholder="e-mail" />
        <Input label="Senha" placeholder="senha" isPassword />
        <Input label="Confirmar senha " placeholder="senha" isPassword />

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
          Create account
        </button>
      </form>
      <p className="mt-2">
        Already have an account?{" "}
        <Link
          href={"/module/login"}
          className="text-primary font-bold cursor-pointer hover:text-secondary "
        >
          Log in
        </Link>
      </p>
    </>
  );
}
