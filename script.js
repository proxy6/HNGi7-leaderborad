let interns = []

axios.get("leaderboard.json")
.then(response => {
    interns = response.data
    const sortedInterns = interns.sort((a, b) => b.Points - a.Points )
       const internsList = sortedInterns.map((intern, id) => {
        const th = document.createElement('th')
        th.appendChild(document.createTextNode(id + 1))
        th.className = "row"

        const td = document.createElement('td')
        td.appendChild(document.createTextNode(intern.fullName))

        const td1 = document.createElement('td')
        td1.appendChild(document.createTextNode(intern.Username))

        const td2 = document.createElement('td')
        td2.appendChild(document.createTextNode(intern.Points))

        const tr = document.createElement('tr')

        const documentFragment = document.createDocumentFragment()
        documentFragment.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)

        document.getElementById('tbody').appendChild(documentFragment)
        
    })
})
