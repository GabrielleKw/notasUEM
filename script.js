document.getElementById("numActivities").addEventListener("input", function () {
    const numActivities = parseInt(this.value) || 0;
    const activitiesDiv = document.getElementById("activities");
    activitiesDiv.innerHTML = "";

    for (let i = 1; i <= numActivities; i++) {
        const label = document.createElement("label");
        label.textContent = `Nota da atividade online ${i}:`;
        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.1";
        input.min = "0";
        input.max = "10";
        activitiesDiv.appendChild(label);
        activitiesDiv.appendChild(input);
    }

    activitiesDiv.classList.remove("hidden");
});

document.getElementById("calculate").addEventListener("click", function () {
    const activityInputs = document.querySelectorAll("#activities input");
    let totalActivitiesScore = 0;

    for (let i = 0; i < activityInputs.length; i++) {
        totalActivitiesScore += parseFloat(activityInputs[i].value) || 0;
    }

    const presencialScore = parseFloat(document.getElementById("presencial").value) || 0;
    const finalScore = (totalActivitiesScore + 2 * presencialScore) / (activityInputs.length + 2);

    const result = document.getElementById("result");
    result.textContent = `Sua nota final é: ${finalScore.toFixed(2)}`;
    result.classList.remove("hidden");
});
