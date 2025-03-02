fetch('cv.json')
    .then(response => response.json())
    .then(data => {
        // Personuppgifter
        document.getElementById('personuppgifter').innerHTML = `
            ${data.personalInfo.name}<br>
            ${data.personalInfo.age} år<br>
            ${data.personalInfo.address}<br>
            ${data.personalInfo.phone}
        `;

        // Utbildning
        const utbildningLista = document.getElementById('utbildning');
        data.education.forEach(edu => {
            let li = document.createElement('li');
            li.textContent = `${edu.degree} - ${edu.school}`;
            utbildningLista.appendChild(li);
        });

        // Språk
        const sprakLista = document.getElementById('sprak');
        data.languages.forEach(lang => {
            let li = document.createElement('li');
            li.textContent = `${lang.language} - ${lang.level}`;
            sprakLista.appendChild(li);
        });

        // Datorkunskaper
        const kunskaperLista = document.getElementById('kunskaper');
        data.skills.forEach(skill => {
            let li = document.createElement('li');
            li.textContent = skill;
            kunskaperLista.appendChild(li);
        });

        // Arbete
        const arbeteLista = document.getElementById('arbete');
        data.workExperience.forEach(job => {
            let li = document.createElement('li');
            li.textContent = `${job.position} - ${job.company} (${job.year})`;
            arbeteLista.appendChild(li);
        });
    })
    .catch(error => console.error('Fel vid hämtning av CV-data:', error));
