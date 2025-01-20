import Header from "@/components/header/Header";
import ToastManager from "@/components/toast/toastManager/ToastManager";


export default function defaultToastPage () {
    return (
        <div>
            <main>
                <Header title="Default Toast"/>
                <ToastManager/>
            </main>
        </div>
    )
}