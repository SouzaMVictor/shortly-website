import IllustrationWorking from "./assets/illustration-working.svg";

export function HeroImage() {
  return (
    <figure className="mb-2 mx-auto md:w-[512px] lg:mb-0 lg:w-1/2">
      <img src={IllustrationWorking} alt="working figure" />
    </figure>
  );
}
