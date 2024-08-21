const { default: CheckEmailRemainder } = require("@/components/my-ui/CheckEmailRemainder");

export default function Home() {
  return (
    <section className="mt-4 space-y-10 my-container">
      <CheckEmailRemainder />
    </section>
  );
}
