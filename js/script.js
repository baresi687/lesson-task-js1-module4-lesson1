const resultsContainer = document.querySelector(".results");
const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function apiCall() {
  try {
    const response = await fetch(url);
    console.log(response)
    const result = await response.json();
    console.log(result)
    resultsContainer.innerHTML += message("success", "API call successful")

    for (let i = 0; i < result.length; i++) {
      if (result[i].teamName.toLowerCase().startsWith("C")) {
        continue;
      } else if (i >= 15) {
        break;
      }

      resultsContainer.innerHTML +=
        `
      <div class="card">
        <h4>Team: ${result[i].teamName}</h4>
        <p>Location: ${result[i].location}</p>
      </div>`
    }
  } catch (error) {
    resultsContainer.innerHTML += message("error", "Something went wrong")
  } finally {
    document.querySelector(".loader").style.display = "none"
  }
}

apiCall().then()


/*

const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultsContainer = document.querySelector(".results");

// we need the code in an async function as we are using the await keyword
async function fetchTeams() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    // always log and inspect the data you get from an API call to see what properties it has
    console.log(json);

    const teams = json;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
      // we only want to display a maximum of 15 teams
      // there will be less than 15 if any team names begin with "C"
      // use break to leave the loop
      if (i === 15) {
        break;
      }

      const teamName = teams[i].teamName;
      const city = teams[i].location;

      // we are checking for small "c" and big "C"
      if (teamName.startsWith("c") || teamName.startsWith("C")) {
        continue;
      }

      // instead of checking for both small "c" and big "C" we can make the teamName lowercase and just check for "c"
      // if (teamName.toLowerCase().startsWith("c")) {
      //     continue;
      // }

      resultsContainer.innerHTML += `<div class="card">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

// call the function
// without this nothing will happen
fetchTeams();*/