import FormForAuth from "@/components/form";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <FormForAuth
        title="Welcome Login"
        linkText="Sign Up"
        href="/signup"
        buttonText="Login"
      ></FormForAuth>
    </div>
  );
}
