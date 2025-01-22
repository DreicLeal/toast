import Header from "@/components/header/Header";
import MultipleToastsManager from "@/components/multipleToasts/multipleToastsManager/multipleToastManager";

export default function multipleToastPage() {
  return (
    <div>
      <main>
        <Header title="Multiple Toast" />
        <MultipleToastsManager />
      </main>
    </div>
  );
}
