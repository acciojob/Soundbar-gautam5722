const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    buttonsContainer.appendChild(btn);

    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.id = sound;
    document.body.appendChild(audio);
});

// Stop Button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSounds);

buttonsContainer.appendChild(stopBtn);

function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
