const players = [
    {
        name: "Lionel Messi 🇦🇷",
        country: "Argentina",
        position: "Forward"
    },
    {
        name: "Kylian Mbappé 🇫🇷",
        country: "France",
        position: "Forward"
    },

    {
        name: "Cristiano Ronaldo 🇵🇹",
        country: "Portugal",
        position: "Forward"
    },

    {
        name: "Neymar Jr. 🇧🇷",
        country: "Brazil",
        position: "Forward"
    },

    {
        name: "Kevin De Bruyne 🇧🇪",
        country: "Belgium",
        position: "Midfielder"
    },

    {
        name: "Virgil van Dijk 🇳🇱",
        country: "Netherlands",
        position: "Defender"
    },

    {
        name: "Luka Modrić 🇭🇷",
        country: "Croatia",
        position: "Midfielder"
    },

    {
        name: "Lamine Yamal 🇪🇸",
        country: "Spain",
        position: "Forward"
    },

    {
        name: "Alisson Becker 🇧🇷",
        country: "Brazil",
        position: "Goalkeeper"
    },

    {
        name: "Erling Haaland 🇳🇴",
        country: "Norway",
        position: "Forward"
    }
];

// Changed "player-container" to "players" to match your HTML
const container = document.getElementById("players");

players.forEach(player => {
    container.innerHTML += `
        <div class="card">
            <h2>${player.name}</h2>
            <p>${player.country}</p>
            <p>${player.position}</p>
        </div>
    `;
});