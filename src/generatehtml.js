const fs = require("fs")
const top = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manager Contact</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

<h1 style="background-color: green; text-align: center;"><strong>My Team</strong></h1>

    <div class="container">
        <div class="row">
`
const bottom = `
</div>
    </div>


</body>

</html>
`

module.exports = (team) => {
    const cards = team.map((item) => {
        const role = item.getRole()
        let card;
        if (role === "Manager") {
            card = `
            <div class="col">
                <div class="card" style="width: 18rem;display:inline-block;">
                    <div class="card-header">
                        Manager: ${item.getName()}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${item.getId()}</li>
                        <li class="list-group-item">Email: ${item.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${item.getOfficeNumber()}</li>
                    </ul>
                </div>

            </div>
            `
        } else if (role === "Engineer") {
            card = `
            <div class="col">
                <div class="card" style="width: 18rem;display:inline-block;">
                    <div class="card-header">
                        Engineer: ${item.getName()}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${item.getId()}</li>
                        <li class="list-group-item">Email: ${item.getEmail()}</li>
                        <li class="list-group-item">GitHub: ${item.getGitHub()}</li>
                    </ul>
                </div>

            </div>
            `
        } else if (role === "Intern") {
            card = `
            <div class="col">
                <div class="card" style="width: 18rem;display:inline-block;">
                    <div class="card-header">
                        Intern: ${item.getName()}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${item.getId()}</li>
                        <li class="list-group-item">Email: ${item.getEmail()}</li>
                        <li class="list-group-item">School: ${item.getSchool()}</li>
                    </ul>
                </div>

            </div>
            `
        }
        return(card)
    });
    const template = `
    ${top}
    ${cards.join('')}
    ${bottom}
    `
    fs.writeFile('./dist/information.html', template, (err, data) => {
        if (err) {
            console.log(err);
        }
    })
}