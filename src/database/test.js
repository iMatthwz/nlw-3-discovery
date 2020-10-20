const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
    await saveOrphanage(db, {
        lat: "-23.689235",
        lng: "-46.575756",
        name: "Lar de todos",
        about: "Presta assistência às crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "+55 (11) 96657-7533",
        images: [
            "https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir à vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visita das 08h às 18h.",
        open_on_weekends: "1"
    });

    const selectAllOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectAllOrphanages);

    const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    console.log(selectedOrphanage);
});