import "./page.module.css";
import Header from "@/components/header/Header";
import ToastManager from "@/components/toast/toastManager/ToastManager";

export default function Home() {
  return (
    <div>
      <main>
        <Header title="Toast Page" />
        <ToastManager />
      </main>
    </div>
  );
}
