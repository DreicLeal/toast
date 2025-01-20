import Header from "@/components/header/Header";
import TimerToastManager from "@/components/timerToast/timerToastManager/TimerToastManager";

export default function timerToastPage () {
    return(
        <div>
            <main>
                <Header title="Timer Toast"/>
                <TimerToastManager/>
            </main>
        </div>
    )
}